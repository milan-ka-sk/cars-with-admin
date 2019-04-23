import { Component, OnInit, Input, EventEmitter} from '@angular/core';
import { Car } from '../../interfaces/car';
import { CarService } from '../../services/car.service';
import { BrandsService } from '../../services/brands.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  @Input() isEdit = false;
  brands: any[];
  curModels: string[] = [];
  carID: string;

  // for edit prefill
   editBrand: string;
   editModel: string;
   editKm: string;
   editYear: number;
   editPrice: number;
   editPower: number;
   editConsumption: number;
   editFuel: string;

  constructor(
    private route: ActivatedRoute,
    private brandsService: BrandsService,
    private carService: CarService,
    private router: Router
  ) { }

  ngOnInit() {
    this.brands = this.brandsService.getBrands();
    if(this.isEdit){
      this.route.params.subscribe(params => {
        // get id
        this.carID = params['id'];
        // get car with id
        this.carService.getCar(this.carID).subscribe(car => {
          this.editBrand = car['brand'];
          this.editModel = car['model'];
          this.editKm = car['km'];
          this.editYear = car['year'];
          this.editPrice = car['price'];
          this.editPower = car['engine']['power'];
          this.editConsumption = car['engine']['consumption'];
          this.editFuel = car['engine']['fuel'];
          this.curModels = this.getCurModels(this.editBrand);

        })
      });
    }
  }

  processForm({form, value, valid}) {

    if(valid){
      if(!this.isEdit){
        // add car
        this.carService.addCar(value)
        .subscribe(
          (v) => {
            this.router.navigateByUrl('/admin/cars');

          },
          err => {
            console.log(err);
          }
        )
      } else {

        //update car
        this.carService.updateCar(value, this.carID)
          .subscribe((res) => {
            this.router.navigateByUrl('/admin/cars');
          });
       }
    } else{
      console.log("Form is not valid");
    }
    form.reset();
  }

  onBrandChange(e): void {

    const brandName = e.target.value;
    this.curModels = this.getCurModels(brandName)
  }

  getCurModels(brandName: string){
    const tmp = this.brands.filter(
      (brand) => {
        return brand['brand'] === brandName;
      }
    )
    return tmp[0].models;
  }
}
