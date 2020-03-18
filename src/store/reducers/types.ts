import * as action from "@/store/actions/actionType";

export interface defaultStateType {
    canvasId: string;
    canvasHeigh: string | number;
    canvasWidth: string | number;
    canvasPart: string;
    currentComponentId:
      | keyof action.ComponentsMap
      | (keyof action.ComponentsMap)[]
      | null;
    componentsIds: (keyof action.ComponentsMap)[];
    components: action.ComponentsMap;
  }

export interface actionPayloadType
  extends action.ComponentsProperty,
    action.ChangeComponentBoundType,
    action.ComponentsOption,
    action.ComponentsStyle,
    action.AddNewComponent,
    action.ComponentRect,
    action.selectComponent {}

export interface actionsType {
  type: string;
  payload: actionPayloadType;
}

export interface reducerFunc {
    (state: defaultStateType, actions: actionsType): defaultStateType;
  }