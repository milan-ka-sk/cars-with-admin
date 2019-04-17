import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-cars-list',
  templateUrl: './admin-cars-list.component.html',
  styleUrls: ['./admin-cars-list.component.css']
})
export class AdminCarsListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if(!localStorage.getItem("rightsToLogin")) {
      this.router.navigateByUrl('/login');
    }
  }

}
