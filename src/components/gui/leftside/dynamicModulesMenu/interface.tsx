import { commandType } from '../dynamicModulesListItem/interface';
import { Components } from '../../../../store/actions/actionType';
export interface State {
    deviceType: string;
    prset: commandType;
    deviceID: number;
    deviceList: Array<string>;
}
export interface Props {
    components: Components[];
    selectComponent(payload: string): Function;
}