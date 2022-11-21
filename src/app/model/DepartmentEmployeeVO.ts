import DepartmentVO from "./DepartmentVO";
import EmployeeVO from "./EmployeeVO";

export default class DepartmentEmployeeVO {
  constructor(
      public id?: number,
      public status?: boolean,
      public createdBy?: string,
      public createdDate?: string,
      public modifiedBy?: string,
      public modifiedDate?: string,
      public department?:DepartmentVO,
      public employee?:EmployeeVO) { }
}
