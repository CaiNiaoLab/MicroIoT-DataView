/** @format */

import * as action from "../actions/actionType";
import { produce } from "immer";

interface actionPayloadType
  extends action.ComponentsProperty,
    action.ChangeComponentBoundType,
    action.ComponentsOption,
    action.ComponentsStyle,
    action.AddNewComponent,
    action.ComponentRect {}

interface actionsType {
  type: string;
  payload: actionPayloadType;
}

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

const defaultState = {
  canvasId: "",
  canvasHeigh: "",
  canvasWidth: "",
  canvasPart: "",
  currentComponentId: null,
  componentsIds: [],
  components: {},
};

export const componentStateManager = produce(
  (state: defaultStateType = defaultState, actions: actionsType) => {
    switch (actions.type) {
      case action.ADD_NEW_COMPONENT: {
        const { currentComponentId: componentId, component } = actions.payload;
        const { currentComponentId } = state;
        if (typeof currentComponentId === "string") {
          state.components[currentComponentId].isSelected = false;
        }
        state.componentsIds.push(componentId);
        state.currentComponentId = componentId;
        state.components = { ...state.components, [componentId]: component };
        return state;
      }
      case action.UPDATE_COMPONENT_OPTION: {
        const currentID = state.currentComponentId;
        if (typeof currentID === "string") {
          state.components[currentID].property.option = actions.payload;
        }
        return state;
      }
      case action.UPDATE_COMPONENT_RECT: {
        const currentID = state.currentComponentId;
        // const { rect } = state.components[currentID].property.option;
        let rect;
        if (typeof currentID === "string") {
          rect = state.components[currentID].property.option;
          state.components[currentID].property.option.rect = {
            ...rect,
            ...actions.payload,
          };
        }
        // if(Array.isArray(currentID)){
        //   currentID.map((key:keyof action.ComponentsMap)=>{

        //   })
        // }

        return state;
      }
      default:
        return state;
    }
  },
);
