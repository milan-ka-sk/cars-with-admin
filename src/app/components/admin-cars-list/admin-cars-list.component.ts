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

  public cars: any;

  constructor(
    private router: Router,
    private carService: CarService
  ) { }

  ngOnInit() {
    if(!localStorage.getItem("loggedIn")) {
      this.router.navigateByUrl('/login');
    }
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars().subscribe((cars) => {
      this.cars = cars;
    });
  }

  deleteCar(id){
    if(confirm('Confirm deletion')){
      this.carService.deleteCar(id)
      .subscribe((data)=>{
        console.log("deleteCar " + data);
        this.getCars();
      });
    }
  }

}
