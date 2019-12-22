import { commandType } from '../dynamicModulesListItem/interface';
import { Components } from '../../../../store/actions/actionType';
import {List} from 'immutable';
export interface State {
    deviceType: string;
    prset: commandType;
    deviceID: number;
    deviceList: Array<string>;
}
export interface Props {
    components: List<Components>;
    selectComponent(payload: string): Function;
}