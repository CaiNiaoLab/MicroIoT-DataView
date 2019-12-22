import { defaultStateType } from "../reducers/componentStateManager";

export const ADD_NEW_COMPONENT = 'ADD_NEW_COMPONENT';
export const INIT_STATE = 'INIT_STATE',
  CHANGE_STATE = 'CHANGE_STATE';
// about operation

export const CHANGE_COMPONENT_BOUND = 'CHANGE_COMPONENT_BOUND';
export const UPDATE_COMPONENT_PROPERTY = 'UPDATE_COMPONENT_PROPERTY';
export const UPDATE_COMPONEN = 'UPDATE_COMPONENT';
export const UPDATE_COMPONENT_OPTION = 'UPDATE_COMPONENT_OPTION';
export const UPDATE_COMPONENT_STYLE = 'UPDATE_COMPONENT_STYLE';
export const SELECT_COMPONENT = 'SELECT_COMPONENT';
export const UPDATE_COMPONENT_BY_FORN_ITEM = 'UPDATE_COMPONENT_BY_FORN_ITEM';

export type mapTypesToInterface<T> = {
  [K in keyof T]: T[K];
}
export type mapTypesToMap <T> ={
  
}
export type mapTypesToUnecessary<T> = {
  [K in keyof T]?: T[K];
}

export interface stateType {
  ChangeStyles: any;
  componentStateManager: mapTypesToInterface<defaultStateType>
}

export interface ChangeComponentBoundType {
  canvasType: 'Traditional' | 'CrossDivision';
  canvasPart: string;
}
export interface ChangeComponentBoundReturn {
  type: string;
  payload: ChangeComponentBoundType
}

export interface Components {
  componentId: string;
  componentTitle: string;
  componentName: string;
  isSelected: boolean;
  property: ComponentsProperty;
}
export interface ComponentsOption {
  x?: number;
  y?: number;
  echarts?: {},
  content?: string;
}
export type ComponentsStyle = React.CSSProperties;
export interface ComponentsProperty {
  option: ComponentsOption;
  style: ComponentsStyle;
}

export interface UpdateComponentOptionReturn {
  type: string;
  payload: ComponentsOption
}

export interface UpdateComponentStyleReturn {
  type: string;
  payload: ComponentsStyle
}
export interface AddNewComponentReturn {
  type: string;
  payload: Components
}

