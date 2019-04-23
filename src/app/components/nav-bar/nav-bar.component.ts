import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  title = 'Cars';

  get isLoggedIn(){

    if(localStorage.getItem("loggedIn")) {
      return true;
    }
    return false;
  }

  constructor() { }

  ngOnInit() {

  }

}
