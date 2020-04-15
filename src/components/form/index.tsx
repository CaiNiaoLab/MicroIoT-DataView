/** @format */

import React from "react";
import { InputGroup, Button } from "@blueprintjs/core";
import CustomizeSelect from "@/components/form/baseForm/customSelect";
import {
  IInputGroupExampleState,
  InputType,
  RRFProps,
  multiRRFProps,
} from "./types/formItemInterface";
import { Control } from "react-redux-form";
import styled from "styled-components";
// import { SketchPicker } from "react-color";

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

// const TextNumber = (props: any) => {
//   return <NumericInput fill={true} />;
// };

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

interface ISelectProps {
  model: string; // 如：'.fontfamily'
  fill?: boolean; // 是否宽度100%
  children?: any; // options，如：<option value="Microsoft YaHei">微软雅黑</option>
  native?: boolean; // 是否使用原生select
  hasEmpty?: boolean; // 是否包含“无”选项
  changeAction?: any; // 它指定<Control>在将更改分发给模型时组件应使用的动作
}

export const FormSelect = (props: ISelectProps) => {
  const { hasEmpty, changeAction, ...newProps } = props;
  // 只在为原生或者hasEmpty=true时才添加“无”选项
  const needShowEmptyOption = hasEmpty;

  const emptyOption = [
    <option key="_nothing_" value="">
      无
    </option>,
  ];

  return (
    <Control
      component={CustomizeSelect}
      changeAction={changeAction}
      {...newProps}
    >
      {needShowEmptyOption
        ? emptyOption.concat(props.children)
        : props.children}
    </Control>
  );
};

export const ColorPicker = (props: RRFProps) => {
  const { model } = props;
  return (
    <>
      <Control
        model={model}
        mapProps={{
          customChange: (props) => props.onChange,
        }}
      />
    </>
  );
};
