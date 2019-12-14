import {
    getStylesChange,
    getDefaultStyles
} from '../../actions/dynamicModulesStyles';
export const ChangeStyles = (state: any = getStylesChange, action: any) => {
    console.log(action);
    switch (action.type) {
        case 'getStylesChange':
            return action;
        case 'getDefaultStyles':
            return action;
        default:
            return state;
    }
} 