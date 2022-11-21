import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { constants } from '../constants/constants';
import EnterpriseVO from '../model/DepartmentVO';

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
}
