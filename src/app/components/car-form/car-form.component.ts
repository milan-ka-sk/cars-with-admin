import { Component, OnInit, Input, EventEmitter} from '@angular/core';
import { Car } from '../../interfaces/car';
import { CarService } from '../../services/car.service';
import { BrandsService } from '../../services/brands.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  @Input() isEdit: boolean = false;
  private brands: any[];
  private curModels: string[] = [];


  constructor(
    private brandsService: BrandsService,
    private carService: CarService
  ) { }

  ngOnInit() {
    this.brands = this.brandsService.getBrands();
    
    if(this.isEdit){
      // get car with id
      
      // prefillForm();
    }
  }

  prefillForm(car: Car){
    
  }

  processForm(car: Car) {

    // this.carService.addCar(car)
    //   .subscribe(
    //     (car) => {
    //       console.log("Car added!");
    //       this.update.emit(true);
    //     },
    //     err => {
    //       console.log(err);
    //     }
    //   )
  }

  onBrandChange(e): void {
    //brand index
    
    let i = e.target.selectedIndex;
    if(i != 0){
      console.log(i);
      this.curModels = this.brands[i-1].models;  // because select has 1 more field (--Empty--) than data
    }
  }
}
