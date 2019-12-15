import { INIT_STATE, CHANGE_STATE } from "./actionType"

export function initState(action: any) {
    return {
        type: INIT_STATE,
        payload: action
    }
}
export function changeState(action: any) {
    return {
        type: CHANGE_STATE,
        payload: action
    }
}