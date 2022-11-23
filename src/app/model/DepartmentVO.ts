import DepartmentEmployeeVO from "./DepartmentEmployeeVO";
import EnterpriseVO from "./EnterpriseVO";

export default class DepartmentVO {
  constructor(
      public id?: number,
      public name?: string,
      public description?: string,
      public phone?: string,
      public status?: boolean,
      public createdBy?: string,
      public createdDate?: string,
      public modifiedBy?: string,
      public modifiedDate?: string,
      public enterprise?:EnterpriseVO,
      public idEnterprise?: number,
      public departmentEmployees?:DepartmentEmployeeVO[]) { }
}
