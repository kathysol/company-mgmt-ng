import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AdminEnterpriseComponent } from './admin-enterprise/admin-enterprise.component';
import { AdminDepartmentComponent } from './admin-department/admin-department.component';
import { AdminEmployeeComponent } from './admin-employee/admin-employee.component';

import { HttpClientModule } from '@angular/common/http';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import { DividerModule } from "primeng/divider";
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AdminEnterpriseComponent,
    AdminDepartmentComponent,
    AdminEmployeeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    PanelModule,
    TableModule,
    DividerModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
