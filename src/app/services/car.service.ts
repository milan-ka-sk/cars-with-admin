import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Car} from '../interfaces/car';
import {carsData} from './test-data/cars-data';

@Injectable()
export class CarService {

  constructor(private http: HttpClient) {
  }

  getCars() {
    return this.http.get('http://localhost:5000/cars');
  }
  addCar(car){
    return this.http.post('http://localhost:5000/cars', car);
  }
}
