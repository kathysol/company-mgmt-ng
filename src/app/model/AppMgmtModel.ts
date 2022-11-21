import { constants } from "../constants/constants";
export default class AppMgmtModel {
  constructor( ) { }

  stateOptions: any[] =  [
    { label: constants.ACTIVE_STATE, value: true },
    { label: constants.INACTIVE_STATE, value: false },
  ];
}
