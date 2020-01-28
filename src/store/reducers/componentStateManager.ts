/** @format */

import * as action from "../actions/actionType";
import { produce } from "immer";

interface actionPayloadType
  extends action.ComponentsProperty,
    action.ChangeComponentBoundType,
    action.ComponentsOption,
    action.ComponentsStyle,
    action.AddNewComponent {}

interface actionsType {
  type: string;
  payload: actionPayloadType;
}

export interface defaultStateType {
  canvasType: "Traditional" | "CrossDivision";
  canvasTitle: "Traditional" | "CrossDivision";
  canvasName: "传统" | "十字";
  canvasId: string;
  canvasHeigh: string | number;
  canvasWidth: string | number;
  canvasPart: string;
  currentComponentId: string;
  components: {
    [key: string]: action.Components;
  };
}

export const componentStateManager = produce(
  (state: defaultStateType, actions: actionsType) => {
    switch (actions.type) {
      case action.ADD_NEW_COMPONENT: {
        const { currentComponentId: componentId, component } = actions.payload;
        const { currentComponentId } = state;
        if (currentComponentId) {
          state.components[currentComponentId].isSelected = false;
        }
        state.currentComponentId = componentId;
        state.components = { ...state.components, [componentId]: component };
        return state;
      }
      case action.UPDATE_COMPONENT_OPTION: {
        const currentID = state.currentComponentId;
        state.components[currentID].property.option = actions.payload;
        return state;
      }
      default:
        return state;
    }
  }
);
