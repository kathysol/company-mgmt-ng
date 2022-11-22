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
import {SelectButtonModule} from 'primeng/selectbutton';
import AppMgmtModel from './model/AppMgmtModel';
import { TagModule } from "primeng/tag";
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {RippleModule} from 'primeng/ripple';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {TooltipModule} from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';

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
    NgbModule,
    SelectButtonModule,
    TagModule,
    MessagesModule,
    MessageModule,
    RippleModule,
    ConfirmDialogModule,
    TooltipModule,
    DialogModule,
    SplitButtonModule,
    ToolbarModule
  ],
  providers: [AppMgmtModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
