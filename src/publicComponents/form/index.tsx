import React from 'react';
import { Intent, ITagProps, InputGroup } from '@blueprintjs/core';
import { IInputGroupExampleState } from './formItemInterface';
import { mapTypesToUnecessary, stateType } from '../../store/actions/actionType';
import { Control } from 'react-redux-form';
import withFormItem from '../../highOrderComponents/withFormItem';
import { connect } from 'react-redux';
import { updateComponentOption, updateComponentStyle } from '../../store/actions/operation';

interface InputType extends IInputGroupExampleState {
  value: string;
}
interface RRFProps {
  model: string; //
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
    console.log(this.props);

  }

  render() {
    // const { disabled, filterValue, large, small, showPassword, tagValue } = this.state;
    const { value } = this.props;
    return (
      <InputGroup
        leftIcon="filter"
        placeholder="Filter histogram..."
        value={value || ""}
        type="text"
      ></InputGroup>
    )
  }
}
export default (props: RRFProps) => (
  <Control.text defaultValue="" model={props.model} ignore={["focus", "change"]} component={Input} />
)