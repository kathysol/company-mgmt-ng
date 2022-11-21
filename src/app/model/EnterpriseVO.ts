import DepartmentVO from "./DepartmentVO";

export default class EnterpriseVO {
  constructor(
      public id?: number,
      public name?: string,
      public address?: string,
      public phone?: string,
      public status?: boolean,
      public createdBy?: string,
      public createdDate?: string,
      public modifiedBy?: string,
      public modifiedDate?: string,
      public departments?: DepartmentVO[]) { }
}
