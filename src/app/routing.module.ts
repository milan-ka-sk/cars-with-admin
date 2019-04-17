import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AdminCarsListComponent } from './components/admin-cars-list/admin-cars-list.component';
import { AdminAddCarComponent } from './components/admin-add-car/admin-add-car.component';
import { AdminEditCarComponent } from './components/admin-edit-car/admin-edit-car.component';

const routes: Routes = [
  { path: '', redirectTo:"cars", pathMatch: 'full'},
  { path: 'cars', component: CarsListComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'admin', redirectTo:"admin/cars"},
  { path: 'admin/cars', component: AdminCarsListComponent},
  { path: 'admin/add-car', component: AdminAddCarComponent},
  { path: 'admin/edit-car', component: AdminEditCarComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }