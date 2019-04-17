import { Component, OnInit } from '@angular/core';
import { Car } from '../../interfaces/car';
import { CarService } from '../../services/car.service';


@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  private cars : any;

  constructor(
    private carService: CarService
  ) {  }

  ngOnInit() {
    this.getCars();
  }

  getCars():void {
    this.carService.getCars().subscribe((cars) => {
      this.cars = cars;
    });
  }

}
