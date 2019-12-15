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
export interface Props {
    prset: commandType;
    moduleName: string;
    moduleID: number;
    moduleType: string;
}