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

class Text extends React.Component<InputType, IInputGroupExampleState> {
  public state: IInputGroupExampleState = {
    disabled: false,
    filterValue: "",
    large: false,
    showPassword: false,
    small: false,
    tagValue: "",
  };
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

const TextNumber = (props: any) => {
  const { smaller } = props;
  return (
    <NumericInput
      style={{
        width: smaller ? "40%" : "100%"
      }}
    />
  )
}

export const InputText = (props: RRFProps) => {
  return (
    <Control.text
      defaultValue=""
      updateOn="blur"
      model={props.model}
      ignore={["focus"]}
      component={Text}
    />
  );
};

interface InputNumberProps extends RRFProps {
  smaller?: boolean
}
export const InputNumber = (props: InputNumberProps) => {
  return (
    <Control.text
      defaultValue=""
      updateOn="blur"
      model={props.model}
      ignore={["focus"]}
      mapProps={{
        smaller: () => props.smaller
      }}
      component={TextNumber}
    />
  );
};

export const MutliInputNumber = (props: multiRRFProps) => {
  const { models } = props;
  return (
    <>
      {models.map((item: string, index: number) => {
        return (
          <InputNumber smaller={true} model={item} key={index} />
        );
      })}
    </>
  );
};
