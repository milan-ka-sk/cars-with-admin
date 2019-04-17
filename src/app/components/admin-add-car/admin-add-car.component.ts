import { Component, OnInit, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-car',
  templateUrl: './admin-add-car.component.html',
  styleUrls: ['./admin-add-car.component.css']
})
export class AdminAddCarComponent implements OnInit {
 
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    if(!localStorage.getItem("rightsToLogin")) {
      this.router.navigateByUrl('/login');
    }
  }
}
