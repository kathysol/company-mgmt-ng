import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { constants } from '../constants/constants';
import DepartmentEmployeeVO from '../model/DepartmentEmployeeVO';
import DepartmentVO from '../model/DepartmentVO';
import EnterpriseVO from '../model/DepartmentVO';
import EmployeeVO from '../model/EmployeeVO';

@Injectable({
  providedIn: 'root'
})
export class AppMgmtService {

  autenticationService: any;
  constructor(private http:HttpClient) {
    this.autenticationService='Basic '+btoa(constants.SERVICES.USER + ':' + constants.SERVICES.PASSWORD);
  }

  public getAllEnterprises(): Observable<EnterpriseVO[]>{

    const headers = new HttpHeaders({ Authorization: this.autenticationService });
    return this.http.get<EnterpriseVO[]>('/api/enterprise/',{headers});
  }

  public saveEnterprise(enterpriseVO:EnterpriseVO): Observable<EnterpriseVO>{
    const headers = new HttpHeaders({ Authorization: this.autenticationService });
    return this.http.post<EnterpriseVO>('/api/enterprise/',enterpriseVO,{headers});
  }

  public getAllDepartments(): Observable<DepartmentVO[]>{

    const headers = new HttpHeaders({ Authorization: this.autenticationService });
    return this.http.get<DepartmentVO[]>('/api/department/',{headers});
  }

  public saveDepartment(departmentVO:DepartmentVO): Observable<DepartmentVO>{
    const headers = new HttpHeaders({ Authorization: this.autenticationService });
    return this.http.post<DepartmentVO>('/api/department/',departmentVO,{headers});
  }

  public getEmployee(): Observable<EmployeeVO[]>{
    const headers = new HttpHeaders({ Authorization: this.autenticationService });
    return this.http.get<EmployeeVO[]>('/api/employee/',{headers});
  }

  public saveEmployee(employeeVO:EmployeeVO): Observable<EmployeeVO>{
    const headers = new HttpHeaders({ Authorization: this.autenticationService });
    return this.http.post<EmployeeVO>('/api/employee/',employeeVO,{headers});
  }

  public getDepartmentEmployee(): Observable<DepartmentEmployeeVO[]>{
    const headers = new HttpHeaders({ Authorization: this.autenticationService });
    return this.http.get<DepartmentEmployeeVO[]>('/api/departmentEmployee/',{headers});
  }

  public saveDepartmentEmployee(departmentEmployeeVO:DepartmentEmployeeVO): Observable<DepartmentEmployeeVO>{
    const headers = new HttpHeaders({ Authorization: this.autenticationService });
    return this.http.post<DepartmentEmployeeVO>('/api/departmentEmployee/',departmentEmployeeVO,{headers});
  }


}
