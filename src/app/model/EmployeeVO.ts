import DepartmentEmployeeVO from "./DepartmentEmployeeVO";

export default class EmployeeVO {
  constructor(
      public id?: number,
      public age?: number,
      public email?: string,
      public name?: string,
      public position?: string,
      public surname?: string,
      public status?: boolean,
      public createdBy?: string,
      public createdDate?: string,
      public modifiedBy?: string,
      public modifiedDate?: string,
      public departmentEmployees?:DepartmentEmployeeVO[]) { }
}
