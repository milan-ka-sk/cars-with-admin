import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Car} from '../interfaces/car';
import {carsData} from './test-data/cars-data';

@Injectable()
export class CarService {

  private apiUrl = 'http://localhost:5000/cars';

  constructor(private http: HttpClient) {
  }

  getCars() {
    return this.http.get(this.apiUrl);
  }
  getCar(id) {
    return this.http.get(this.apiUrl + "/" + id);
  }
  addCar(car){
    return this.http.post(this.apiUrl, car);
  }
  updateCar(car, id){
    // return this.http.post(this.apiUrl + "/" +  id + "?_method=PUT", car);
    return this.http.post(this.apiUrl + "/" +  id, car);
  }
  deleteCar(id) {
    console.log('car service, delete ' + id);
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
