import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AdminCarsListComponent } from './components/admin-cars-list/admin-cars-list.component';
import { AdminAddCarComponent } from './components/admin-add-car/admin-add-car.component';
import { AdminEditCarComponent } from './components/admin-edit-car/admin-edit-car.component';
import { RoutingModule } from './routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ReportComponent } from './components/report/report.component';
import { CarService } from './services/car.service';
import { LoginService } from './services/login.service';



@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    LoginComponent,
    LogoutComponent,
    AdminCarsListComponent,
    AdminAddCarComponent,
    AdminEditCarComponent,
    NavBarComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  providers: [CarService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
