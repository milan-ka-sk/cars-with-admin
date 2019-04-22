import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-edit-car',
  templateUrl: './admin-edit-car.component.html',
  styleUrls: ['./admin-edit-car.component.css']
})
export class AdminEditCarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if(!localStorage.getItem("loggedIn")) {
      this.router.navigateByUrl('/login');
    }
  }

}
