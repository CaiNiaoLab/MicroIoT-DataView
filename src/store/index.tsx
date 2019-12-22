import reducer from './reducers';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { fromJS } from 'immutable';

export const store: any = createStore(fromJS(reducer), devToolsEnhancer({}));
export interface StoreState {
    languageName: string,
    enthusiasmLevel: number
}