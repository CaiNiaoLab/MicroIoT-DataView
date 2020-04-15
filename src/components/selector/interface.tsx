export interface State {
    value:string
}
export interface Props {
    data:Array<content>;
    getValue:Function;
    className?:string;
}
interface content {
    key:string;
    value:string;
}