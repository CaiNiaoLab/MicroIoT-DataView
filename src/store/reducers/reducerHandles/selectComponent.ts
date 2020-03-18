import { reducerFunc } from "../types";
import * as action from "@/store/actions/actionType";

const selectComponentHandle: reducerFunc = (state, actions) => {
    const componentId = actions.payload.toString();
    const changeSelectStatus = (componentId: keyof action.ComponentsMap) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      state.components[componentId].isSelected = !state.components[componentId]
        .isSelected;
    };
    if (Array.isArray(componentId)) {
      componentId.map(item => changeSelectStatus);
    } else {
      changeSelectStatus(componentId);
    }
    //保存current的参数
    //取消其他选中， 并且focus当前目标
    for (let componentsKey in state.components) {
      if (componentsKey != componentId) {
        state.components[componentsKey].isSelected = false
      }
    }
    //设置可drag
    state.currentComponentId = componentId;
    //更新右侧menu的参数
    return state;
  };
export default  selectComponentHandle;