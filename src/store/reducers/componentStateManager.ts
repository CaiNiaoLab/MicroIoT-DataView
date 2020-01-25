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

// const defaultState: defaultStateType = {
//   canvasType: "Traditional",
//   canvasTitle: "Traditional",
//   canvasName: "传统",
//   canvasId: "",
//   canvasHeigh: "",
//   canvasWidth: "",
//   canvasPart: "bottom",
//   components: {
//     [componentId]: {
//       componentTitle: "",
//       componentName: "",
//       componentType: "echarts",
//       isSelected: true,
//       property: {
//         style: {},
//         option: {}
//       },
//       prevComponents: null,
//       nextComponents: null
//     }
//   }
// };

export const componentStateManager = produce(
  (state: defaultStateType, actions: actionsType) => {
    switch (actions.type) {
      case action.ADD_NEW_COMPONENT: {
        const { currentComponentId: componentId, component } = actions.payload;
        state.currentComponentId = componentId;
        state.components = { ...state.components, [componentId]: component };
        return state;
      }
      case action.UPDATE_COMPONENT_OPTION: {
        const components = state.components;
        const componentId = state.currentComponentId;
        const component = components[componentId]; //降低对象的深度
        if (component.property?.option) {
          component.property.option = actions.payload.option;
        }
        components[componentId] = component;
        return state;
      }
      default:
        return state;
    }
  }
);
