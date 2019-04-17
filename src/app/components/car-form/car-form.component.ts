import { Component, OnInit, Input, EventEmitter} from '@angular/core';
import { Car } from '../../interfaces/car';
import { CarService } from '../../services/car.service';
import { BrandsService } from '../../services/brands.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  @Input() isEdit: boolean = false;
  private brands: any[];
  private curModels: string[] = [];
  private carID: string;

  // for edit prefill
  private editBrand: string;
  private editModel: string;
  private editKm: string;
  private editYear: number;
  private editPrice: number;
  private editPower: number;
  private editConsumption: number;
  private editFuel: string;

  constructor(
    private route: ActivatedRoute,
    private brandsService: BrandsService,
    private carService: CarService
  ) { }

  ngOnInit() {
    this.brands = this.brandsService.getBrands();
    
    if(this.isEdit){
      this.route.params.subscribe(params => {
        // get id
        this.carID = params["id"];
        // get car with id
        this.carService.getCar(this.carID).subscribe(car => {
          this.editBrand = car["brand"];
          this.editModel = car["model"];
          this.editKm = car["km"];
          this.editYear = car["year"];
          this.editPrice = car["price"];
          this.editPower = car["engine"]["power"];
          this.editConsumption = car["engine"]["consumption"];
          this.editFuel = car["engine"]["fuel"];
          this.curModels = this.getCurModels(this.editBrand);
           
        })
      });
    }
  }

  processForm({form, value, valid}) {

    if(valid){
      this.carService.addCar(value)
      .subscribe(
        (v) => {
          console.log("Car added! " + v );
        },
        err => {
          console.log(err);
        }
      )
    } else{
      console.log("Form is not valid");
    }
    form.reset();
    
  }

  onBrandChange(e): void {
    //brand index
    
    let i = e.target.selectedIndex;
    if(i != 0){
      console.log(i);
      this.curModels = this.brands[i-1].models;  // because select has 1 more field (--Empty--) than data
    }
  }

  getCurModels(brandName: string){
    let tmp = this.brands.filter(
      (brand) => {
        return brand["brand"] == brandName;
      }
    )
    console.log(tmp[0].models);
    return tmp[0].models;
    //console.log("xxx " + tmp.models);
  }
}
