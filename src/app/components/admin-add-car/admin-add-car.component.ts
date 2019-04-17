import { Component, OnInit, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../../interfaces/car';
import { CarService } from '../../services/car.service';
import { BrandsService } from '../../services/brands.service';


@Component({
  selector: 'app-admin-add-car',
  templateUrl: './admin-add-car.component.html',
  styleUrls: ['./admin-add-car.component.css']
})
export class AdminAddCarComponent implements OnInit {

  private brands: any[];
  private curModels: string[] = [];

  constructor(
    private router: Router,
    private brandsService: BrandsService,
    private carService: CarService
  ) { }

  ngOnInit() {
    if(!localStorage.getItem("rightsToLogin")) {
      this.router.navigateByUrl('/login');
    }

    this.brands = this.brandsService.getBrands();
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
