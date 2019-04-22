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
        this.carService.addCar(value)
        .subscribe(
          (v) => {
            console.log('Car added! ' + v );
            this.router.navigateByUrl('/admin/cars');

          },
          err => {
            console.log(err);
          }
        )
      } else {
        console.log('PUT');
        console.log(value );
        console.log(this.carID )

        this.carService.updateCar(value, this.carID);
        // .subscribe(
        //   (v) => {
        //     console.log("Car added! " + v );
        //     this.router.navigateByUrl('/admin/cars');

        //   },
        //   err => {
        //     console.log(err);
        //   }

        // )

      }
    } else{
      console.log("Form is not valid");
    }
    form.reset();

  }

  onBrandChange(e): void {

    console.log(e.target.value);
    const brandName = e.target.value;
    this.curModels = this.getCurModels(brandName)


    //brand index
    // let i = e.target.selectedIndex;
    // if(i != 0){
    //   console.log(i);
    //   this.curModels = this.brands[i-1].models;  // because select has 1 more field (--Empty--) than data
    // }
  }

  getCurModels(brandName: string){
    const tmp = this.brands.filter(
      (brand) => {
        return brand['brand'] === brandName;
      }
    )
    console.log(tmp[0].models);
    return tmp[0].models;
    //console.log("xxx " + tmp.models);
  }
}
