import * as action from '../actions/componentStateManager';

const defaultState = {
    type: 'NO_OPERATION',
    payload: 'state is not upadte'
}
export const componentStateManager = (state: any = defaultState, actions: any) => {
    switch (actions.type) {
        case action.INIT_STATE:
            return state = actions.payload;
        case action.CHANGE_STATE:
            return Object.assign({},state,actions.payload);
        default:
            return state
    }
}