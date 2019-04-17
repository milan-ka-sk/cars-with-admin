import { Injectable } from '@angular/core';
import {User} from '../interfaces/user';

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

  constructor() { }
  
  login(user: User): boolean{
    if(user.username === this.validUser.username  && user.password === this.validUser.password){
      console.log("service true");
      return true;
    }
    return false;
  }
}
