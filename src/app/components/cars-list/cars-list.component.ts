import { Component, OnInit } from '@angular/core';
import { Car } from '../../interfaces/car';
import { CarService } from '../../services/car.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  cars : any;
  noCars = false;
  isLoading = true;

  constructor(
    private router: Router,
    private carService: CarService
  ) {  }

  ngOnInit() {
    if(localStorage.getItem("loggedIn")) {
      this.router.navigateByUrl('admin/cars');
    }
    this.getCars();
  }

  getCars():void {
    this.carService.getCars().subscribe((cars) => {
      this.cars = cars;
      this.isLoading = false;

      // if all cars were deleted and there are none left
      console.log('number of cars: ' + Object.keys(cars).length );
      if(Object.keys(cars).length === 0 ){
        this.noCars = true;
      } else{
        this.noCars = false;
      }
    });
  }

}
