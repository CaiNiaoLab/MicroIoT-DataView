import { commandType } from '../dynamicModulesListItem/interface';
export interface State{
    deviceType: string;
    prset: commandType;
    deviceID: number;
    deviceList: Array<string>;
}
export interface Props { }