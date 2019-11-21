export const INIT_STATE = 'INIT_STATE',
    CHANGE_STATE = 'CHANGE_STATE';
export function initState(action:any){
    return {
        type:INIT_STATE,
        payload:action
    }
} 
export function changeState (action:any){
    return {
        type:CHANGE_STATE,
        payload:action
    }
}