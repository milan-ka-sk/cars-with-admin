import { Injectable } from '@angular/core';
import {User} from '../interfaces/user';
import { HttpClient } from '@angular/common/http';


//
// this is just a fake and very simple implementation
// just for demonstration
//

@Injectable()
export class LoginService {

  // fake and just for demonstration - by no means a real world implementation
  private validUser: User = {
    username: "admin",
    password: "pass"
  }

  constructor(private http: HttpClient) { }

  login(user: User){
    return this.http.post('http://localhost:5000/login', user);
  }
}
