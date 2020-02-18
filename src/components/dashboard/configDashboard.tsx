/** @format */

import React from "react";
import { connect } from "react-redux";
import { stateType } from "@/store/actions/actionType";

class ConfigDashborad extends React.Component {
  render() {
    return <div>config</div>;
  }
}

const mapStateToProps = (state: stateType) => {
  const { currentComponentId, components } = state.componentStateManager;
  if (typeof currentComponentId === "string") {
    return {
      component: components[currentComponentId],
      currentComponentId: currentComponentId,
    };
  } else {
    return {
      component: null,
      currentComponentId: currentComponentId,
    };
  }
};

export default connect(mapStateToProps)(ConfigDashborad);
