import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../../interfaces/car';
import { CarService } from '../../services/car.service';


@Component({
  selector: 'app-admin-cars-list',
  templateUrl: './admin-cars-list.component.html',
  styleUrls: ['./admin-cars-list.component.css']
})
export class AdminCarsListComponent implements OnInit {

  cars: Car[] = [];

  constructor(
    private router: Router,
    private carService: CarService
  ) { }

  ngOnInit() {
    if(!localStorage.getItem("rightsToLogin")) {
      this.router.navigateByUrl('/login');
    }
    this.getCars();
  }

  getCars():void {

    this.cars = this.carService.getCars();
      
  }

}
