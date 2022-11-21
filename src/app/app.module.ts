import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AdminEnterpriseComponent } from './admin-enterprise/admin-enterprise.component';
import { AdminDepartmentComponent } from './admin-department/admin-department.component';
import { AdminEmployeeComponent } from './admin-employee/admin-employee.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AdminEnterpriseComponent,
    AdminDepartmentComponent,
    AdminEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
