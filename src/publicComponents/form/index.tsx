import React from 'react';
import { NumericInput, InputGroup } from '@blueprintjs/core';
import { IInputGroupExampleState } from './formItemInterface';
import { Control } from 'react-redux-form';

interface InputType extends IInputGroupExampleState {
  value: string;
}
interface RRFProps {
  model: string; //
  label: string;
}

interface multiRRFProps {
  models:string[]
  labels: string[];
}
class Input extends React.Component<InputType, IInputGroupExampleState> {

  public state: IInputGroupExampleState = {
    disabled: false,
    filterValue: "",
    large: false,
    showPassword: false,
    small: false,
    tagValue: "",
  };

  componentDidMount() {
    // console.log(this.props);

  }

  render() {
    // const { disabled, filterValue, large, small, showPassword, tagValue } = this.state;
    return (
      <InputGroup
        leftIcon="filter"
        placeholder="Filter histogram..."
        {...this.props}
      ></InputGroup>
    )
  }
}

export default (props: RRFProps) =>{ 
  return(
    <Control.text 
    defaultValue="" 
    updateOn="blur"
    model={props.model} 
    ignore={["focus"]} 
    component={Input} />
  )
}

export const InputNumber = (props:RRFProps) =>{
  return(
    <Control.text 
    defaultValue="" 
    updateOn="blur"
    model={props.model} 
    ignore={["focus"]} 
    component={NumericInput} />
  )
}

export const MutliInputNumber = (props:multiRRFProps) =>{

}