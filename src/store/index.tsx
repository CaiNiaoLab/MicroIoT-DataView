import reducer from '../reducers';
import { createStore } from 'redux'
export const store = createStore(reducer);
export interface StoreState{
    languageName:string,
    enthusiasmLevel: number
}