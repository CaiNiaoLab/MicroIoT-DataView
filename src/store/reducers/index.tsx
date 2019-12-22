// import { ChangeStyles } from './dynamicModulesStyles';
import { componentStateManager } from './componentStateManager';
import {  Reducer,combineReducers } from 'redux';
import { createForms } from 'react-redux-form';

const reducers = combineReducers({
  // ChangeStyles: ChangeStyles,
  componentStateManager: componentStateManager as Reducer<any>,
  ...createForms({
    form: componentStateManager as Reducer<any>,
  })
});
export default reducers;