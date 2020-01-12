/** @format */

import React from "react";
import { Container } from "@/components/gui/center/style";
import Canvas from "@/components/gui/center/Canvas";

interface Props {}

export default class Center extends React.Component {
  render() {
    return (
      <Container>
        <Canvas />
      </Container>
    );
  }
}
