import { ChangeStyles } from './dynamicModulesStyles';
import { componentStateManager } from './componentStateManager';
import { combineReducers, Reducer } from 'redux';

const reducers = combineReducers({
  // ChangeStyles: ChangeStyles,
  componentStateManager: componentStateManager as Reducer<any>,
});
export default reducers;