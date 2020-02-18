/** @format */

import React from "react";
import { connect } from "react-redux";
import Draggable from "react-draggable";
// import styled from "styled-components";
import { Tab, Tabs } from "@blueprintjs/core";
import { stateType, ComponentsMap } from "@/store/actions/actionType";
import Dataset from "./dataset";

// const Container = styled.div`
//   max-width: 20vw;
//   max-height
// `;

class Dashbroad extends React.Component<any> {
  render() {
    const { componentId } = this.props;
    return (
      <Draggable>
        <Tabs selectedTabId="dataset">
          <Tab id="config" title="组件配置" />
          <Tab
            id="dataset"
            title="数据绑定"
            panel={<Dataset componentId={componentId} />}
          />
        </Tabs>
      </Draggable>
    );
  }
}

const mapStateToProps = (state: stateType) => {
  const { components, currentComponentId } = state.componentStateManager;
  let selectComponents;
  if (typeof currentComponentId === "string") {
    selectComponents = components[currentComponentId];
  }
  if (Array.isArray(currentComponentId)) {
    selectComponents = currentComponentId.map((key: keyof ComponentsMap) => {
      return components[key];
    });
  }
  return {
    selectComponents: selectComponents,
    selectComponentsSize: Array.isArray(currentComponentId)
      ? currentComponentId.length
      : 1,
    currentID: currentComponentId,
  };
};

export default connect(mapStateToProps)(Dashbroad);