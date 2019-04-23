import { Component, OnInit } from '@angular/core';
import { Car } from '../../interfaces/car';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  cars: any;
  totalPrice = 0;
  oldest: Car = null;
  mostUsed: Car = null;
  mostExpensive: Car = null;
  mostEfficient: Car = null;

  constructor( private carService: CarService ) { }

  calculate(): void {
    if (this.cars) {
      for (let c of this.cars) {
        this.totalPrice += c.price;

        if (this.oldest == null || c.year < this.oldest.year) {
          this.oldest = c;
        }

        if (this.mostUsed == null || c.km > this.mostUsed.km) {
          this.mostUsed = c;
        }

        if (this.mostExpensive == null || c.price > this.mostExpensive.price) {
          this.mostExpensive = c;
        }

        if (this.mostEfficient == null || c.engine.consumption < this.mostEfficient.engine.consumption) {
          this.mostEfficient = c;
        }
      }
    }

  }

  ngOnInit() {
    this.carService.getCars().subscribe((cars) => {
      this.cars = cars;
      this.calculate();
    });

  }

}
