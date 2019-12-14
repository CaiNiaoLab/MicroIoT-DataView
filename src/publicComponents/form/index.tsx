import React from 'react';
import { Intent, ITagProps, InputGroup } from '@blueprintjs/core';
import { IInputGroupExampleState } from './formItemInterface';
import withFormItem from '../../highOrderComponents/withFormItem';

class Input extends React.Component<any, IInputGroupExampleState> {

  public state: IInputGroupExampleState = {
    disabled: false,
    filterValue: "",
    large: false,
    showPassword: false,
    small: false,
    tagValue: "",
  };

  render() {
    const { disabled, filterValue, large, small, showPassword, tagValue } = this.state;
    const { handleFilterChange } = this.props;
    return (
      <InputGroup disabled={disabled}
        large={large}
        leftIcon="filter"
        onChange={handleFilterChange}
        placeholder="Filter histogram..."

        small={small}
        value={filterValue}></InputGroup>
    )
  }
}

export default withFormItem(Input);