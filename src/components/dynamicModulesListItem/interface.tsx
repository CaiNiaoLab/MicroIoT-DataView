export interface commandType {
    topic: string;
    key?: string;
    value?: string;
    mulitCommand?: Array<object>;
}
export interface State {
    topic: string;
    command: commandType;
    moduleName: string;
    moduleID: number;
    moduleType: string;
}
export interface Props {
    prset: commandType;
}