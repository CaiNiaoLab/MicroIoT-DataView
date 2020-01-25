/** @format */

import React, { Suspense, lazy } from "react";
import { connect } from "react-redux";
import { Container } from "@/components/gui/center/Canvas/style";
import {
  stateType,
  Components,
  mapTypesToUnecessary
} from "@/store/actions/actionType";
import Dragger from "@/publicComponents/Dragger";
import keys from "@/utils/useKeyForMap";

interface Props {
  CanvasStyles?: React.CSSProperties;
  components: Components;
  keys: any[];
}

class Canvas extends React.Component<mapTypesToUnecessary<Props>> {
  // recursiveRenderComponents = () => {
  //   const {components,keys} = this.props;

  // }
  render() {
    const { CanvasStyles, keys, components } = this.props;
    return (
      <div style={CanvasStyles}>
        <Container>
          {keys && keys.length > 0
            ? keys.map((item: any, index: any) => {
                return (
                  <Dragger key={index}>
                    <Suspense fallback={<>loading....</>}></Suspense>
                  </Dragger>
                );
              })
            : null}
        </Container>
      </div>
    );
  }
}

const mapStateToProps: any = (state: stateType) => {
  const { components } = state.componentStateManager;
  return {
    components: components,
    keys: components ? keys(components) : []
  };
};

export default connect<any, any, mapTypesToUnecessary<Props>>(mapStateToProps)(
  Canvas
);
