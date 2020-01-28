/** @format */

import React from "react";
import { NumericInput, InputGroup } from "@blueprintjs/core";
import {
  IInputGroupExampleState,
  InputType,
  RRFProps,
  multiRRFProps
} from "./formItemInterface";
import { Control } from "react-redux-form";
import styled from "styled-components";

class Text extends React.Component<InputType, IInputGroupExampleState> {
  public state: IInputGroupExampleState = {
    disabled: false,
    filterValue: "",
    large: false,
    showPassword: false,
    small: false,
    tagValue: ""
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
  return <NumericInput fill={true} />;
};

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
  smaller?: boolean;
  // className: any;
}
export const InputNumber = (props: InputNumberProps) => {
  return (
    <Control.text
      updateOn="blur"
      model={props.model}
      ignore={["focus"]}
      // mapProps={{
      //   smaller: () => props.smaller
      // }}
      component={Text}
    />
  );
};

const MutliInputNumberContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .subInputNumber {
    width: 40%;
  }
`;

export const MutliInputNumber = (props: multiRRFProps) => {
  const { models } = props;
  return (
    <>
      {models.map((item: string, index: number) => {
        return (
          <MutliInputNumberContainer key={index}>
            <InputNumber smaller={true} model={item} />
          </MutliInputNumberContainer>
        );
      })}
    </>
  );
};
