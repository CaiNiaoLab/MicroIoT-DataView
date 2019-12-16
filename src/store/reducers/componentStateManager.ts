import * as action from '../actions/actionType';
import KeyForMap from '../../utils/useKeyForMap';
import uuid from 'uuid';

interface actionPayloadType extends action.ComponentsProperty, action.ChangeComponentBoundType, action.ComponentsOption, action.ComponentsStyle { };

interface actionsType {
    type: string;
    payload: actionPayloadType
};

export interface defaultStateType {
    canvasType: "Traditional" | "CrossDivision"
    canvasTitle: "Traditional" | "CrossDivision",
    canvasName: "传统" | "十字",
    canvasId: string,
    canvasHeigh: string | number,
    canvasWidth: string | number,
    canvasPart: string;
    components: {
        top: Array<action.Components>;
        bottom: Array<action.Components>;
    }
}

const defaultState: defaultStateType = {
    canvasType: "Traditional",
    canvasTitle: "Traditional",
    canvasName: "传统",
    canvasId: "",
    canvasHeigh: "",
    canvasWidth: "",
    canvasPart: "bottom",
    components: {
        top: [],
        bottom: [{
            componentId: uuid(),
            componentTitle: "",
            componentName: "",
            isSelected: true,
            property: {
                style: {},
                option: {}
            }
        }]
    }
}

export const componentStateManager = (state = defaultState, actions: actionsType) => {
    console.log(actions, state);

    switch (actions.type) {
        case action.INIT_STATE:
            return state;
        case action.CHANGE_COMPONENT_BOUND:
            state.canvasPart = actions.payload.canvasPart;
            return state;
        case action.UPDATE_COMPONENT_OPTION:
            const componentsSet = KeyForMap(state.components);
            const componentsIndex = state.canvasPart === "top" ? componentsSet[0] : componentsSet[1];
            const components = state.components[componentsIndex];
            const currentIndex: number = components.findIndex((item: action.Components) => item.isSelected);
            const currentComponent: action.Components | undefined = components.find((item: action.Components) => item.isSelected);
            if (currentComponent) {
                currentComponent.property.option = actions.payload;
                components[currentIndex] = currentComponent;
                state.components[componentsIndex] = components;
            }
            return state
        default:
            return state
    }
}