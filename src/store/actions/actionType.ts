/** @format */

import { defaultStateType } from "../reducers/componentStateManager";

export const ADD_NEW_COMPONENT = "ADD_NEW_COMPONENT";
export const INIT_STATE = "INIT_STATE",
  CHANGE_STATE = "CHANGE_STATE";
// about operation

export const CHANGE_COMPONENT_BOUND = "CHANGE_COMPONENT_BOUND";
export const UPDATE_COMPONENT_PROPERTY = "UPDATE_COMPONENT_PROPERTY";
export const UPDATE_COMPONEN = "UPDATE_COMPONENT";
export const UPDATE_COMPONENT_OPTION = "UPDATE_COMPONENT_OPTION";
export const UPDATE_COMPONENT_STYLE = "UPDATE_COMPONENT_STYLE";
export const SELECT_COMPONENT = "SELECT_COMPONENT";
export const UPDATE_COMPONENT_BY_FORN_ITEM = "UPDATE_COMPONENT_BY_FORN_ITEM";
export const UPDATE_COMPONENT_RECT = "UPDATE_COMPONENT_RECT";
export const CLOSE_COMPONENT_LIST = "CLOSE_COMPONENT_LIST";
export const HIDE_COMPONENT_LIST = "HIDE_COMPONENT_LIST";

export type mapTypesToInterface<T> = {
  [K in keyof T]: T[K];
};
export type mapTypesToMap<T> = {};
export type mapTypesToUnecessary<T> = {
  [K in keyof T]?: T[K];
};

export interface stateType {
  ChangeStyles: any;
  componentStateManager: mapTypesToInterface<defaultStateType>;
}

export interface ChangeComponentBoundType {
  canvasType: "Traditional" | "CrossDivision";
  canvasPart: string;
}
export interface ChangeComponentBoundReturn {
  type: string;
  payload: ChangeComponentBoundType;
}

export interface ComponentsDataset {
  mockdata: { data: any };
  dataMap: {
    componentId: keyof ComponentsMap;
    datasetId: string;
  };
}

export interface Components {
  componentTitle: string;
  componentName: string;
  componentType: string;
  isSelected: boolean;
  property: ComponentsProperty;
  dataset?: ComponentsDataset;
  prevComponents: Components | null;
  nextComponents: Components | null;
}
export interface ComponentsMap {
  [key: string]: Components;
}
export type ComponentsMapKeysType = keyof ComponentsMap;
export interface ComponentRect {
  rTop?: string;
  rLeft?: string;
  rHeight?: string;
  rWidth?: string;
}
export interface ComponentsOption {
  rect?: ComponentRect;
  echarts?: {};
  content?: string;
}
export type ComponentsStyle = React.CSSProperties;
export interface ComponentsProperty {
  option: ComponentsOption;
  style: ComponentsStyle;
}

export interface UpdateComponentOptionReturn {
  type: string;
  payload: ComponentsOption;
}

export interface UpdateComponentStyleParamter {
  ComponentId: string;
  ComponentsStyle: ComponentsStyle;
}

export interface UpdateComponentStyleReturn {
  type: string;
  payload: UpdateComponentStyleParamter;
}
export interface AddNewComponentReturn {
  type: string;
  payload: AddNewComponent;
}
export interface AddNewComponent {
  component: Components;
  currentComponentId: string;
}
export type SelectComponent = keyof Components;
