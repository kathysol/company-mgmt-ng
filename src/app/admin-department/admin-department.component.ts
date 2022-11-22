import { Component, OnInit } from '@angular/core';
import { AppMgmtService } from '../service/app-mgmt.service';
import { constants } from '../constants/constants';
import AppMgmtModel from '../model/AppMgmtModel';
import { Message, PrimeNGConfig ,MessageService, ConfirmationService, MenuItem} from 'primeng/api';
import { messages } from '../constants/messages';
import DepartmentVO from '../model/DepartmentVO';

@Component({
  selector: 'app-admin-department',
  templateUrl: './admin-department.component.html',
  styleUrls: ['./admin-department.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class AdminDepartmentComponent implements OnInit {
  constants:any;
  model:AppMgmtModel= new AppMgmtModel;
  departmentAll: DepartmentVO[]= [];
  displayModalAudit:boolean=false;
  auditDepartment:DepartmentVO= new DepartmentVO;
  items: MenuItem[] = [];
  displayModalNewDepartment:boolean=false;
  newDepartment=new DepartmentVO;
  titleNewModal:string='New Department';
  isNew:boolean=false;

  constructor(private appMgmtService:AppMgmtService,
    private modelr:AppMgmtModel,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private confirmationService: ConfirmationService) {
    this.model=modelr;
   }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Department',
          icon: 'pi pi-global'
      },
      {
          label: 'Employee Assignment',
          icon: 'pi pi-user-plus'
      }
  ];
    this.constants=constants;
    this.getAllDepartments();
  }


  getAllDepartments(){
    this.appMgmtService.getAllDepartments().subscribe(resp =>{
      this.departmentAll=resp;

    })
}


clearNew(){
  this.newDepartment=new DepartmentVO;
}
showModalEdit(departmentVO:DepartmentVO){
  this.newDepartment=departmentVO;
  this.displayModalNewDepartment=true;
  this.titleNewModal=='Edit Department';
  this.isNew=false;
}

changeStatusDepartment(newStatus:boolean,departmentVO: DepartmentVO){
  departmentVO.status=newStatus;
  departmentVO.modifiedBy='UsuMod';
  let createDepartment= new DepartmentVO;
  this.appMgmtService.saveDepartment(departmentVO).subscribe(resp =>{
    createDepartment=resp;
   this.messageService.add({severity:'success', summary:messages.THE_DEPARTMENT, detail:messages.SUCCESS.MODIFIED_CORRECTLY});
   this.clearNew();
  this.getAllDepartments();
  }, err => {
      this.messageService.add({severity:'error', summary:messages.ERROR_NAME, detail:messages.ERROR.DEPARTMENT_NO_MODIFIED});
})

}

showModalAudit(departmentVO: DepartmentVO){
  this.displayModalAudit=true;
  this.auditDepartment=departmentVO;
}

showModalNew(){
  this.clearNew();
  this.displayModalNewDepartment=true;
  this.titleNewModal=='New Department';
  this.isNew=true;

}

saveDepartment(isNew:boolean){

}

}
