/**
 * 表单颜色拾取器
 * TODO: 可扩展的渐变色组件
 *
 * @format
 */

import React from "react";
import { SketchPicker } from "react-color";
import styled from "styled-components";
import { InputGroup, Button, Icon, Popover, Position } from "@blueprintjs/core";
import { actions } from "react-redux-form";
import { store } from "@/store";

const Container = styled.div`
  position: relative;
  width: 126px;
  .sketchpicker {
    line-height: 1;
    input {
      box-sizing: content-box;
      color: #333;
      text-align: center;
    }
  }
`;

const RGBAToHexA = (rgbaObj: any) => {
  let { r, g, b, a } = rgbaObj;
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);
  a = a === 1 ? "" : Math.round(a * 255).toString(16);
  if (r.length === 1) r = "0" + r;
  if (g.length === 1) g = "0" + g;
  if (b.length === 1) b = "0" + b;
  if (a.length === 1) a = "0" + a;
  return "#" + r + g + b + a;
};

const FormColor = (props: any) => {
  const { value, onChange, name } = props;
  return (
    <Container>
      <InputGroup
        fill={true}
        value={value}
        onChange={onChange}
        rightElement={
          <Popover
            position={Position.BOTTOM}
            autoFocus={false}
            modifiers={{
              arrow: { enabled: false },
            }}
            content={
              <SketchPicker
                // className="sketchpicker"
                // width="{200}"
                color={value}
                onChangeComplete={(color: any) => {
                  const hex = RGBAToHexA(color.rgb);
                  store.dispatch(actions.change(name, hex));
                }}
              />
            }
          >
            <Button icon={<Icon icon="tint" color={value} />} minimal={true} />
          </Popover>
        }
      />
    </Container>
  );
};

export default FormColor;
