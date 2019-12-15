import { Components } from "../../../../store/actions/actionType";

export interface commandType {
    topic: string;
    key?: string;
    value?: string;
    mulitCommand?: Array<object>;
}
export interface State {
    topic: string;
    command: commandType;

}
export interface Props extends Components{
    selectComponent(payload:string):{type:string,payload:string}
}