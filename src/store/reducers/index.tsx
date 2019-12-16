import { ChangeStyles } from './dynamicModulesStyles';
import { componentStateManager } from './componentStateManager';
import { combineReducers, Reducer } from 'redux';
import { combineForms, createForms } from 'react-redux-form';

const reducers = combineReducers({
  // ChangeStyles: ChangeStyles,
  componentStateManager: componentStateManager as Reducer<any>,
  ...createForms({
    form: componentStateManager as Reducer<any>,
  })
});
export default reducers;