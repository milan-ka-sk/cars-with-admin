import { Injectable } from '@angular/core';
import {Car} from '../interfaces/car';
import {carsData} from './test-data/cars-data';

@Injectable()
export class CarService {

  private cars: Car[];

  constructor() {
    this.cars = carsData;
  }

  getCars(): Car[] {
    return this.cars;
  }
}
