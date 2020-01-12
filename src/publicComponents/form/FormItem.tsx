/** @format */

import React from "react";
import { FormItemProps } from "./formItemInterface";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  .Label {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
  .formItem {
    display: flex;
    flex: 5;
    justify-content: space-between;
    align-items: center;
  }
`;

export default class FormItem extends React.Component<FormItemProps> {
  render() {
    const { labels, children } = this.props;
    return (
      <Container>
        <div className="Label">{labels}</div>
        <div className="formItem">{children}</div>
      </Container>
    );
  }
}
