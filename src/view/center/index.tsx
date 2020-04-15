/** @format */

import React from "react";
import { Container } from "@/view/center/style";
import Canvas from "@/view/center/Canvas";
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
