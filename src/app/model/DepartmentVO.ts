import DepartmentEmployeeVO from "./DepartmentEmployeeVO";

export default class EnterpriseVO {
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
      public departmentEmployees?:DepartmentEmployeeVO[]) { }
}
