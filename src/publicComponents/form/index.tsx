import React from 'react';
import { Intent, ITagProps, InputGroup } from '@blueprintjs/core';
import { IInputGroupExampleState } from './formItemInterface';
import { mapTypesToUnecessary, stateType } from '../../store/actions/actionType';
import withFormItem from '../../highOrderComponents/withFormItem';
import { connect } from 'react-redux';
import { updateComponentOption, updateComponentStyle } from '../../store/actions/operation';

interface InputType extends IInputGroupExampleState {
  value: string | number;
  handleFilterChange(): void;
  absolutePath: string;
}

class Input extends React.Component<mapTypesToUnecessary<InputType>, IInputGroupExampleState> {

  public state: IInputGroupExampleState = {
    disabled: false,
    filterValue: "",
    large: false,
    showPassword: false,
    small: false,
    tagValue: "",
  };

  updateValue = () => {
    const { absolutePath } = this.props;
    let tempPath: string[];
    if (absolutePath) {
      tempPath = absolutePath.split('.');
    }
  }

  render() {
    const { disabled, filterValue, large, small, showPassword, tagValue } = this.state;
    return (
      <InputGroup
        disabled={disabled}
        large={large}
        leftIcon="filter"
        placeholder="Filter histogram..."
        small={small}
        value={filterValue}></InputGroup>
    )
  }
}


const mapDispatchToProps = {
  updateComponentOption,
  updateComponentStyle,
}

export default connect(null, null)(Input);