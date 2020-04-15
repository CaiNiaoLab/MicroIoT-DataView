/** @format */

import * as action from "../actions/actionType";
import { produce } from "immer";
import { defaultStateType, actionsType } from "@/store/reducers/types";
import selectComponentHandle from "@/store/reducers/reducerHandles/selectComponent";

const defaultState = {
  canvasId: "",
  canvasHeigh: "",
  canvasWidth: "",
  canvasPart: "",
  currentComponentId: null,
  componentsIds: [],
  components: {},
};

// const selectComponentHandle: reducerFunc = (state, actions) => {
//   const { componentId } = actions.payload;
//   const changeSelectStatus = (componentId: keyof action.ComponentsMap) => {
//     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
//     state.components[componentId].status.isSelected = !state.components[
//       componentId
//     ].status.isSelected;
//   };
//   if (Array.isArray(componentId)) {
//     componentId.map((item) => changeSelectStatus);
//   } else {
//     changeSelectStatus(componentId);
//   }
//   return state;
// };

export const componentStateManager = produce(
  (state: defaultStateType = defaultState, actions: actionsType) => {
    switch (actions.type) {
      case action.ADD_NEW_COMPONENT: {
        const { currentComponentId: componentId, component } = actions.payload;
        const { currentComponentId } = state;
        if (typeof currentComponentId === "string") {
          state.components[currentComponentId].status.isSelected = false;
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
        let rect;
        if (typeof currentID === "string") {
          rect = state.components[currentID].property.option;
          state.components[currentID].property.option.rect = {
            ...rect,
            ...actions.payload,
          };
        }
        return state;
      }
      case action.SELECT_COMPONENT: {
        selectComponentHandle(state, actions);
        break;
      }
      default:
        return state;
    }
  },
);
