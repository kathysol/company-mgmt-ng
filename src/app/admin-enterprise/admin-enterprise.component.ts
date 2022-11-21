import { Component, OnInit } from '@angular/core';
import EnterpriseVO from '../model/EnterpriseVO';
import { AppMgmtService } from '../service/app-mgmt.service';
import { constants } from '../constants/constants';
import AppMgmtModel from '../model/AppMgmtModel';

@Component({
  selector: 'app-admin-enterprise',
  templateUrl: './admin-enterprise.component.html',
  styleUrls: ['./admin-enterprise.component.css']
})

export class AdminEnterpriseComponent implements OnInit {

  enterpriseAll: EnterpriseVO[]= [];
  constants:any;
  value2: string='';
  newEnterprise:EnterpriseVO= new EnterpriseVO;
  menssageValidation: string='';
  model:AppMgmtModel= new AppMgmtModel;

  constructor(private appMgmtService:AppMgmtService,private modelr:AppMgmtModel) {
    this.model=modelr;
   }


  ngOnInit(): void {
    this.constants=constants;
    this.newEnterprise= new EnterpriseVO;
    this.clearNew();
    this.getAllEnterprises();
  }


  getAllEnterprises(){
    this.appMgmtService.getAllEnterprises().subscribe(resp =>{
      this.enterpriseAll=resp;
      console.warn('ENTERPRISES ALL',this.enterpriseAll);
    })
}

clearNew(){
  this.newEnterprise= new EnterpriseVO;
  this.newEnterprise.nameValid=true;
  this.newEnterprise.phoneValid=true;
  this.newEnterprise.addressValid=true;
  this.newEnterprise.status=true;
  this.menssageValidation='';
}
}
