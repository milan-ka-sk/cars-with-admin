import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFailed: boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {

    if(localStorage.getItem("loggedIn")) {
      this.router.navigateByUrl('admin/cars');
    }
  }

  login({value, valid}){
    if(valid){

      this.loginService.login(value)
        .subscribe((res) => {
          if(res === "ok"){
            localStorage.setItem("loggedIn", "yes");
            this.router.navigateByUrl('admin/cars');
          } else{
            this.loginFailed = true;
            setTimeout(function(){
            this.loginFailed = false;
            }.bind(this), 2000);
          }
        });

    } else{
      console.log("Form is not valid");
    }
  }
}
