import { Component, OnInit } from '@angular/core';
import EnterpriseVO from '../model/EnterpriseVO';
import { AppMgmtService } from '../service/app-mgmt.service';

@Component({
  selector: 'app-admin-enterprise',
  templateUrl: './admin-enterprise.component.html',
  styleUrls: ['./admin-enterprise.component.css']
})

export class AdminEnterpriseComponent implements OnInit {

  enterpriseAll: EnterpriseVO[]= [];
  constructor(private appMgmtService:AppMgmtService) { }


  ngOnInit(): void {
    this.getAllEnterprises();
  }


  getAllEnterprises(){
    this.appMgmtService.getAllEnterprises().subscribe(resp =>{
      this.enterpriseAll=resp;
      console.warn('ENTERPRISES ALL',this.enterpriseAll);
    })
}
}
