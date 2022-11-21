import { Component, OnInit } from '@angular/core';
import EnterpriseVO from '../model/EnterpriseVO';
import { AppMgmtService } from '../service/app-mgmt.service';
import { constants } from '../constants/constants';
import AppMgmtModel from '../model/AppMgmtModel';
import { Message, PrimeNGConfig ,MessageService, ConfirmationService} from 'primeng/api';
import { messages } from '../constants/messages';

@Component({
  selector: 'app-admin-enterprise',
  templateUrl: './admin-enterprise.component.html',
  styleUrls: ['./admin-enterprise.component.css'],
  providers: [MessageService,ConfirmationService]
})

export class AdminEnterpriseComponent implements OnInit {

  enterpriseAll: EnterpriseVO[]= [];
  constants:any;
  value2: string='';
  newEnterprise:EnterpriseVO= new EnterpriseVO;
  model:AppMgmtModel= new AppMgmtModel;
  isEdition:boolean=false;

  constructor(private appMgmtService:AppMgmtService,
    private modelr:AppMgmtModel,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private confirmationService: ConfirmationService) {
    this.model=modelr;
   }


  ngOnInit(): void {
    this.constants=constants;
    this.newEnterprise= new EnterpriseVO;
    this.clearNew();
    this.getAllEnterprises();
    this.primengConfig.ripple = true;
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
  this.isEdition=false;
}

saveEnterprise(){
  let createdEnterprise= new EnterpriseVO;
  this.appMgmtService.saveEnterprise(this.newEnterprise).subscribe(resp =>{
    createdEnterprise=resp;
    this.messageService.add({severity:'success', summary:messages.THE_COMPANY, detail:messages.SUCCESS.ENTERPRISE_CREATED});
    this.clearNew();
    this.getAllEnterprises();
  }, err => {
    this.messageService.add({severity:'error', summary:messages.ERROR_NAME, detail:messages.ERROR.ENTERPRISE_NO_CREATED});
})


}

cancelEnterprise(){
  this.confirmationService.confirm({
    message: messages.QUESTION.TO_CANCEL,
    header: constants.VIEWS.CONFIRMATION,
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      this.clearNew();
      this.messageService.add({severity:'info', summary:messages.INFO.CANCEL_YES, detail:messages.INFO.FIELDS_CLEAR});
    },
    reject: () => {

    }
});
}

editEnterprise(){}

goToEdit(enterprise: EnterpriseVO){
  this.isEdition=true;
  this.newEnterprise=enterprise;
}

validateEnterprise(){
  this.newEnterprise.createdBy='Jhon';
  this.saveEnterprise();
}

}
