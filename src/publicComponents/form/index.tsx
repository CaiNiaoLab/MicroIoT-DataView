/** @format */

import React from "react";
import { NumericInput, InputGroup } from "@blueprintjs/core";
import {
  IInputGroupExampleState,
  InputType,
  RRFProps,
  multiRRFProps,
} from "./formItemInterface";
import { Control } from "react-redux-form";

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
    return (
      <InputGroup
        leftIcon="filter"
        placeholder="Filter histogram..."
        {...this.props}
      ></InputGroup>
    );
  }
}

export const InputText = (props: RRFProps) => {
  return (
    <Control.text
      defaultValue=""
      updateOn="blur"
      model={props.model}
      ignore={["focus"]}
      component={Input}
    />
  );
};

export const InputNumber = (props: RRFProps) => {
  return (
    <Control.text
      defaultValue=""
      updateOn="blur"
      model={props.model}
      ignore={["focus"]}
      component={NumericInput}
    />
  );
};

export const MutliInputNumber = (props: multiRRFProps) => {
  const { models } = props;
  return (
    <>
      {models.map((item: string, index: number) => {
        return (
          <Control.text
            defaultValue=""
            updateOn="blur"
            model={item}
            key={index}
            ignore={["focus"]}
            component={NumericInput}
          />
        );
      })}
    </>
  );
};
