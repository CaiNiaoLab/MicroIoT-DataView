/** @format */

import React from "react";
import Top from "@/components/gui/topDashbroad";
import Center from "@/components/gui/center";
import RightSide from "@/components/gui/rightside";
import { connect } from "react-redux";
import { stateType } from "@/store/actions/actionType";
import LeftSide from "@/components/gui/MenuList";
import styled from "styled-components";
// import { store } from "@/store";
// import { stateType } from "@/store/actions/actionType";

interface Props {
  listLenght: number;
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  overflow: hidden;
  .mid {
    display: flex;
    height: 90vh;
    width: 100vw;
    box-sizing: border-box;
    background-color: #30404d;
    position: relative;
    .leftSide {
      position: absolute;
      height: 100%;
      z-index: 10;
    }
  }
`;

class Hello extends React.Component<Props, object> {
  render() {
    // const state: stateType = store.getState();
    const { listLenght } = this.props;
    return (
      <Container>
        <Top />
        <div className="bp3-dark mid">
          {listLenght ? <LeftSide /> : null}
          <Center />
          <RightSide />
        </div>
      </Container>
    );
  }
}
const mapStateToProps = (state: stateType) => {
  const { componentsIds } = state.componentStateManager;
  return {
    listLenght: componentsIds.length,
  };
};
export default connect(mapStateToProps)(Hello);
