import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../../interfaces/car';

@Component({
  selector: 'app-car-component',
  templateUrl: './car-component.component.html',
  styleUrls: ['./car-component.component.css']
})
export class CarComponentComponent implements OnInit {

  @Input() car: Car;
  constructor() { }

  ngOnInit() {
  }

}
