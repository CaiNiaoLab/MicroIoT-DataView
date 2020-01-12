/** @format */

import React from "react";
import { connect } from "react-redux";
import { Container } from "@/components/gui/center/Canvas/style";

interface Props {
  CanvasStyles?: React.CSSProperties;
}

export default class Canvas extends React.Component<Props> {
  render() {
    const { CanvasStyles } = this.props;
    return (
      <div style={CanvasStyles}>
        <Container></Container>
      </div>
    );
  }
}
