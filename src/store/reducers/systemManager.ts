/** @format */

import { produce } from "immer";
import * as action from "@/store/actions/actionType";

export interface defaultSystemStateType {
  componentListClose: boolean;
  componentListHide: boolean;
  rightSideDrawerClose: boolean;
  rightSideDrawerHide: boolean;
}

const defaultSystemState: defaultSystemStateType = {
  componentListClose: true,
  componentListHide: false,
  rightSideDrawerClose: true,
  rightSideDrawerHide: false,
};

interface actionsType {
  type: string;
  payload: boolean;
}

export const systemManager = produce(
  (
    state: defaultSystemStateType = defaultSystemState,
    actions: actionsType,
  ) => {
    switch (actions.type) {
      case action.CLOSE_COMPONENT_LIST:
        state.componentListClose = actions.payload;
        break;
      case action.HIDE_COMPONENT_LIST:
        state.componentListHide = actions.payload;
        break;
      default:
        break;
    }
  },
);
