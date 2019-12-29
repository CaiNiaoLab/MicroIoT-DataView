import * as action from '../actions/actionType';
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
    components:Array<action.Components>;
    
}

const defaultState: defaultStateType = {
    canvasType: "Traditional",
    canvasTitle: "Traditional",
    canvasName: "传统",
    canvasId: "",
    canvasHeigh: "",
    canvasWidth: "",
    canvasPart: "bottom",
    components: [{
        componentId: uuid(),
        componentTitle: "",
        componentName: "",
        isSelected: true,
        property: {
            style: {},
            option: {}
        }
    }]
};

export const componentStateManager = (state:defaultStateType = defaultState, actions: actionsType) => {
    // state = unFreeze(state);
    switch (actions.type) {
        case action.INIT_STATE:
            return state;
        case action.UPDATE_COMPONENT_OPTION:
            const components = Object.assign([],state.components);
            return Object.assign({},state,{
                ...state,
                components:components.map((item:action.Components)=>{
                    if(item.isSelected){
                        return Object.assign({},item,{property:{...item.property, option :actions.payload}})
                    }
                    return item
                })
            })
        default:
            return state
    }
}