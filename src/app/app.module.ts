import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AdminCarsListComponent } from './components/admin-cars-list/admin-cars-list.component';
import { AdminAddCarComponent } from './components/admin-add-car/admin-add-car.component';
import { AdminEditCarComponent } from './components/admin-edit-car/admin-edit-car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    LoginComponent,
    LogoutComponent,
    AdminCarsListComponent,
    AdminAddCarComponent,
    AdminEditCarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
