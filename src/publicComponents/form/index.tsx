/** @format */

import React from "react";
import { InputGroup, Button } from "@blueprintjs/core";
import { Select, IItemRendererProps } from "@blueprintjs/select";
import {
  IInputGroupExampleState,
  InputType,
  RRFProps,
  multiRRFProps,
} from "./formItemInterface";
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

interface FormSelectRRFProps extends RRFProps {
  items: any;
  label: any;
  activeItem: string;
}

const CustomSelect = (props: any) => {
  const { items, label, change } = props;
  console.log('[CustomSelect]' + JSON.stringify(props));

  const FilmSelect = Select.ofType<any>();
  const selectItem = (item: any, itemProps: IItemRendererProps) => {
    return (
      <option key={itemProps.index} value={item.key}>
        {item.value}
      </option>
    );
  };

  return (
    <FilmSelect itemRenderer={selectItem} onItemSelect={change} items={items}>
      <Button>请选择{label}</Button>
    </FilmSelect>
  );
};
export const FormSelect = (props: FormSelectRRFProps) => {
  const { model, items, label } = props;
  console.log('[FormSelect]' + JSON.stringify(props))
  return (
    <Control.custom
      model={model}
      mapProps={({ onChange, viewValue }) => ({
        change: onChange,
        items: items,
        label: label,
        value: viewValue,
      })}
      component={CustomSelect}
    />
  );
};

export const ColorPicker = (props: RRFProps) => {
  const { model } = props;
  return (
    <>
      <Control
        model={model}
        mapProps={{
          customChange: props => props.onChange,
        }}
      />
    </>
  );
};
