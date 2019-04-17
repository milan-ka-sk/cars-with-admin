import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import {User} from '../../interfaces/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginFailed: boolean = false;
  public userRegistered: boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {

    if(localStorage.getItem("rightsToLogin")) {
      this.router.navigateByUrl('admin/cars');
    }
  }

  login({value, valid}){
    if(valid){
      
      let canLogin = this.loginService.login(value); // returns true or false

      if(canLogin) {

        localStorage.setItem("rightsToLogin", "yes");
        this.router.navigateByUrl('admin/cars');

      } else{

        this.loginFailed = true;
        setTimeout(function(){
          this.loginFailed = false;
        }.bind(this), 2000);

      }

    } else{
      console.log("Form is not valid");
    }
  }
}
