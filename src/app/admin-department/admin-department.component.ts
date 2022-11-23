import { Component, OnInit } from '@angular/core';
import { AppMgmtService } from '../service/app-mgmt.service';
import { constants } from '../constants/constants';
import AppMgmtModel from '../model/AppMgmtModel';
import { Message, PrimeNGConfig ,MessageService, ConfirmationService, MenuItem} from 'primeng/api';
import { messages } from '../constants/messages';
import DepartmentVO from '../model/DepartmentVO';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import EnterpriseVO from '../model/EnterpriseVO';
import EmployeeVO from '../model/EmployeeVO';

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
  post: any = '';
  departmentGroupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', []),
    phone: new FormControl('', []),
    enterprise: new FormControl('', [Validators.required])
  });
  enterpriseAll: EnterpriseVO[]= [];
  selectedCountry:EnterpriseVO = new EnterpriseVO;
  displayModalManageEmployees:boolean=false;

  allEmployees: EmployeeVO[]= [];
  addEmployees: EmployeeVO[]= [];

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
  this.newDepartment.status=true;
  this.newDepartment.enterprise= new EnterpriseVO;
  console.warn('this.newDepartment',this.newDepartment);
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
  if (departmentVO!=null && departmentVO.createdDate!=null ) {
    departmentVO.createdDate=departmentVO.createdDate.substring(0,10);
  }

  if (departmentVO!=null && departmentVO.modifiedDate!=null ) {
    departmentVO.modifiedDate=departmentVO.modifiedDate.substring(0,10);
  }

  this.displayModalAudit=true;
  this.auditDepartment=departmentVO;
}

showModalNew(){
  this.clearNew();
  this.displayModalNewDepartment=true;
  this.titleNewModal=='New Department';
  this.isNew=true;
  this.getAllEnterprises();

}

saveDepartment(isNew:boolean){
if (this.departmentGroupForm.controls.name.hasError('required')) {

}else{
  console.warn('FORM',this.departmentGroupForm);
  this.newDepartment.name=this.departmentGroupForm.controls.name.value+'';
  this.newDepartment.description=this.departmentGroupForm.controls.description.value+'';
  this.newDepartment.phone=this.departmentGroupForm.controls.phone.value+'';
  this.newDepartment.status=true;
  this.newDepartment.createdBy='usadmd';
  this.newDepartment.idEnterprise=this.newDepartment.enterprise?.id;

  let createDepartment= new DepartmentVO;
  this.appMgmtService.saveDepartment(this.newDepartment).subscribe(resp =>{
    createDepartment=resp;
    if (isNew) {
      this.messageService.add({severity:'success', summary:messages.THE_DEPARTMENT, detail:messages.SUCCESS.CREATED_CORRECTLY});
      }else{
        this.messageService.add({severity:'success', summary:messages.THE_DEPARTMENT, detail:messages.SUCCESS.MODIFIED_CORRECTLY});
        }
   this.clearNew();
  this.getAllDepartments();
  this.displayModalNewDepartment=false;
  }, err => {
    if (isNew) {
      this.messageService.add({severity:'error', summary:messages.ERROR_NAME, detail:messages.ERROR.DEPARTMENT_NO_CREATED});
      }else{
        this.messageService.add({severity:'error', summary:messages.ERROR_NAME, detail:messages.ERROR.DEPARTMENT_NO_MODIFIED});
 }
      })

}

}



getErrorMessage(con:string) {
  let error='';
  if (con=='name') {
    error=this.departmentGroupForm.controls.name.hasError('required') ? 'Name is required' : '';
  } if (con=='enterprise') {
    error=this.departmentGroupForm.controls.enterprise.hasError('required') ? 'Company is required' : '';

  }

  return error;

}

getAllEnterprises(){
  this.appMgmtService.getAllEnterprises().subscribe(resp =>{
    this.enterpriseAll=resp;

  })
}

showModalManageEmployees(departmentVO: DepartmentVO){
  this.displayModalManageEmployees=true;
  this.getAllEmployees();
}

getAllEmployees(){
  this.appMgmtService.getAllEmployees().subscribe(resp =>{
    this.allEmployees=resp;
  })
}

manageEmployee(){

}
}
