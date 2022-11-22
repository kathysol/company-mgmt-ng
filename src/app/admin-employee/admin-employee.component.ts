import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig, ConfirmationService } from 'primeng/api';
import AppMgmtModel from '../model/AppMgmtModel';
import { AppMgmtService } from '../service/app-mgmt.service';
import { constants } from '../constants/constants';
import { messages } from '../constants/messages';
import EmployeeVO from '../model/EmployeeVO';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import DepartmentVO from '../model/DepartmentVO';

@Component({
  selector: 'app-admin-employee',
  templateUrl: './admin-employee.component.html',
  styleUrls: ['./admin-employee.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class AdminEmployeeComponent implements OnInit {
  constants:any;
  model:AppMgmtModel= new AppMgmtModel;
  employeeAll: EmployeeVO[]= [];
  showEmployee: EmployeeVO= new EmployeeVO;
  employeeGroupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', []),
    email: new FormControl('', []),
    position: new FormControl('', [Validators.required])
  });
  departmentAll: DepartmentVO[]= [];
  selectedDepartment: DepartmentVO= new DepartmentVO;

  constructor(private appMgmtService:AppMgmtService,
    private modelr:AppMgmtModel,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private confirmationService: ConfirmationService) {
    this.model=modelr;
   }

  ngOnInit(): void {
    this.constants=constants;
    this.getAllEmployees();
    this.getAllDepartments();
  }

  clearAll(){
this.showEmployee= new EmployeeVO;
  }
  getAllEmployees(){
    this.appMgmtService.getAllEmployees().subscribe(resp =>{
      this.employeeAll=resp;
    })
  }

  changeStatusEmployee(newStatus:boolean,employee: EmployeeVO){
    employee.status=newStatus;
    employee.modifiedBy='UsuModEmp';
    let createDepartment= new EmployeeVO;
    this.appMgmtService.saveEmployee(employee).subscribe(resp =>{
      createDepartment=resp;
     this.messageService.add({severity:'success', summary:messages.THE_EMPLOYEE, detail:messages.SUCCESS.MODIFIED_CORRECTLY});
     this.clearAll();
    this.getAllEmployees();
    }, err => {
        this.messageService.add({severity:'error', summary:messages.ERROR_NAME, detail:messages.ERROR.EMPLOYEE_NO_MODIFIED});
  })
}

chargeEmployee(employee: EmployeeVO){
this.showEmployee=employee;
}

getAllDepartments(){
  this.appMgmtService.getAllDepartments().subscribe(resp =>{
    this.departmentAll=resp;

  })
}

}
