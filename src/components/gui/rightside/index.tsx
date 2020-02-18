/** @format */

import React from "react";
import { connect } from "react-redux";
import { stateType } from "@/store/actions/actionType";
import Dashbroad from "@/components/dashboard";
import Draggable from "react-draggable";

class RightSide extends React.Component<any> {
  render() {
    const { componentId } = this.props;
    return (
      // <div>
      <Draggable>
        <Dashbroad componentId={componentId} />
      </Draggable>
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
