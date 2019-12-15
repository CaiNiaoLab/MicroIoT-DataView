import reducer from './reducers';
import { createStore } from 'redux';
export const store: any = createStore(reducer);
export interface StoreState {
    languageName: string,
    enthusiasmLevel: number
}