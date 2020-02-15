/** @format */

import React from "react";
import { connect } from "react-redux";
import { stateType } from "@/store/actions/actionType";
import Dashbroad from "@/components/dashbroad";
// import Draggable from "react-draggable";

class RightSide extends React.Component<any> {
  render() {
    const { componentId } = this.props;
    return (
      // <div>
      <Dashbroad componentId={componentId} />
      // </div>
    );
  }
}

const mapStateToProps = (state: stateType) => {
  const { currentComponentId } = state.componentStateManager;
  return {
    componentId: currentComponentId,
  };
};

export default connect(mapStateToProps)(RightSide);
