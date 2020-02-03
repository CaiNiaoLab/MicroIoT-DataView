/** @format */

import React from "react";
import { connect } from "react-redux";
import { Container } from "@/components/gui/center/Canvas/style";
import { stateType, ComponentsMap } from "@/store/actions/actionType";
import Dragger from "@/publicComponents/Dragger";
import CanvasComp from "@/components/gui/center/Canvas/canvasComp";

interface Props {
  CanvasStyles?: React.CSSProperties;
  keys: any[];
  currentID: string;
}

// const canvasComp = styled.div``;

class Canvas extends React.PureComponent<Props> {
  render() {
    const { CanvasStyles, keys, currentID } = this.props;
    // const Lazy = lazy(() => import("@/components/comps_instance/echarts"));
    return (
      <Container style={CanvasStyles}>
        {keys.map((item: keyof ComponentsMap) => {
          return <CanvasComp key={item} currentID={item} />;
        })}
        {currentID ? <Dragger currentID={currentID} /> : null}
      </Container>
    );
  }
}

const mapStateToProps: any = (state: stateType) => {
  const { componentsIds, currentComponentId } = state.componentStateManager;

  return {
    keys: componentsIds,
    currentID: currentComponentId,
  };
};

export default connect<any, any, any>(mapStateToProps)(Canvas);
