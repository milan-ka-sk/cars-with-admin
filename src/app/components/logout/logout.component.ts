import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log("LOGOUT local st " + localStorage.getItem("rightsToLogin"));
    if(localStorage.getItem("rightsToLogin")){
      localStorage.removeItem("rightsToLogin");
      this.router.navigateByUrl('');
    } else{
      this.router.navigateByUrl('login');
    }
  }

}
