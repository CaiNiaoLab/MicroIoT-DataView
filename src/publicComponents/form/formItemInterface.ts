export interface IInputGroupExampleState {
  disabled: boolean;
  filterValue: string;
  large: boolean;
  small: boolean;
  showPassword: boolean;
  tagValue: string;
}
export interface InputType extends IInputGroupExampleState {
  value: string;
}
export interface RRFProps {
  model: string; //
}

export interface multiRRFProps {
  models:string[]
}

export interface FormItemProps {
  labels: string;
  content:JSX.Element;
}