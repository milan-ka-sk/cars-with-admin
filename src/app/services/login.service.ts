import { Injectable } from '@angular/core';
import {User} from '../interfaces/user';
import { HttpClient } from '@angular/common/http';


//
// this is just a fake and very simple implementation
// just for demonstration
//

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  login(user: User){
    return this.http.post('https://mk-cars-api.herokuapp.com/login', user);
  }
}
