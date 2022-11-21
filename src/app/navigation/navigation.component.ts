import { Component, OnInit } from '@angular/core';
import { constants } from '../constants/constants';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  menuList: MenuItem[]=[];
  nav:any;

  constructor() { }

  ngOnInit(): void {
    this.nav=0;
    this.menuList = [
      {
          label:constants.VIEWS.HOME,
          icon:'pi pi-fw pi-file',
          command: () => {
            this.goDashboard();
        }
      },
      {
          label:constants.VIEWS.ENTERPRISES,
          icon:'pi pi-fw pi-pencil',
          command: () => {
            this.goEnterprises();
        }

      },
      {
          label:constants.VIEWS.DEPARTMENTS,
          icon:'pi pi-fw pi-user',
          command: () => {
            this.goDepartments();
        }
      },
      {
          label:constants.VIEWS.EMPLOYEES,
          icon:'pi pi-fw pi-power-off',
          command: () => {
            this.goEmployees();
        }
      }
  ];
  }
  goEmployees() {
    this.nav=3;
  }
  goDepartments() {
    this.nav=2;
  }
  goEnterprises() {
    this.nav=1;
  }

  goDashboard() {
    this.nav=0;
  }

}
