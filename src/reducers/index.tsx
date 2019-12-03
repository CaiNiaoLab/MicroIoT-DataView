import { ChangeStyles } from './dynamicModulesStyles';
import { componentStateManager } from './componentStateManager';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  ChangeStyles: ChangeStyles,
  componentStateManager: componentStateManager,
});
export default reducers;