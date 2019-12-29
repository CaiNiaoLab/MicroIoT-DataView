import reducer from './reducers';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

export const store: any = createStore(reducer, devToolsEnhancer({}));