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
    });
  }

}
