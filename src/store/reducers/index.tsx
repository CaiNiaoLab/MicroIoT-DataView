// import { ChangeStyles } from './dynamicModulesStyles';
import { componentStateManager } from './componentStateManager';
import {  combineReducers } from 'redux';
import { createForms } from 'react-redux-form';

const reducers = combineReducers({
  // ChangeStyles: ChangeStyles,
  // componentStateManager:componentStateManager,
  ...createForms(
     {componentStateManager:componentStateManager }
  )
});
export default reducers;