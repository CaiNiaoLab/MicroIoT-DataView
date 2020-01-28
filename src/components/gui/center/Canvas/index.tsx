/** @format */

import React, { Suspense, lazy } from "react";
import { connect } from "react-redux";
import { Container } from "@/components/gui/center/Canvas/style";
import {
  stateType,
  Components,
  ComponentsMap
} from "@/store/actions/actionType";
import Dragger from "@/publicComponents/Dragger";
import keys from "@/utils/useKeyForMap";
import styled from "styled-components";

interface Props {
  CanvasStyles?: React.CSSProperties;
  components: Components;
  keys: any[];
  currentID: string;
}

// const canvasComp = styled.div``;

class Canvas extends React.PureComponent<Props> {
  render() {
    const { CanvasStyles, keys, components, currentID } = this.props;
    const Lazy = lazy(() => import("@/components/comps_instance/echarts"));
    return (
      <Container style={CanvasStyles}>
        {keys && keys.length > 0
          ? keys.map((item: keyof ComponentsMap) => {
              const tempComponent: any = components;
              const { property } = tempComponent[item] as Components;
              return (
                <Suspense key={item} fallback={<>loading....</>}>
                  <div style={property?.style}>
                    <Lazy
                      componentId={item}
                      option={property?.option}
                      styles={property?.style}
                    />
                  </div>
                </Suspense>
              );
            })
          : null}
        <Dragger currentID={currentID}></Dragger>
      </Container>
    );
  }
}

const mapStateToProps: any = (state: stateType) => {
  const { components } = state.componentStateManager;
  const { currentComponentId } = state.componentStateManager;
  return {
    components: components,
    keys: components
      ? (keys(components) as (keyof ComponentsMap)[])
      : ([] as (keyof ComponentsMap)[]),
    currentID: currentComponentId
  };
};

export default connect<any, any, any>(mapStateToProps)(Canvas);
