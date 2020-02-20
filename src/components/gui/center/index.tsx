/** @format */

import React from "react";
import { Container } from "@/components/gui/center/style";
import Canvas from "@/components/gui/center/Canvas";
import { store } from "@/store";

interface Props {}

export default class Center extends React.Component {
  handle = () => {
    // store.dispatch();
  };
  render() {
    return (
      <Container>
        <Canvas />
      </Container>
    );
  }
}
