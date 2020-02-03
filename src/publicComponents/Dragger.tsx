/** @format */

import React from "react";
import { connect } from "react-redux";
import Draggable, { DraggableEvent } from "react-draggable";
// import { defaultStateType } from "../store/reducers/componentStateManager";
import { updateComponentRect } from "../store/actions/operation";
import {
  stateType,
  // UpdateComponentOptionReturn,
  Components,
  // mapTypesToUnecessary
} from "../store/actions/actionType";

interface ownProps {
  currentID: string;
}

interface Props extends ownProps {
  selectComponent: Components;
  updateComponentRect?(payload: { rLeft: number; rTop: number }): any;
}

class Dragger extends React.Component<Props, any> {
  handlerDrag = (e: DraggableEvent, data: any) => {
    const { updateComponentRect } = this.props;
    if (updateComponentRect) {
      updateComponentRect({
        rLeft: data.x,
        rTop: data.y,
      });
    }
  };
  handlerDragStop = (e: any) => {
    e.stopPropagation();
  };
  render() {
    const { selectComponent } = this.props;
    const property = selectComponent ? selectComponent.property : undefined;
    // const {option} = property;
    return (
      <Draggable
        bounds="parent"
        defaultPosition={{ x: 0, y: 0 }}
        onDrag={this.handlerDrag}
        onStop={this.handlerDragStop}
        defaultClassName="draggerContainer"
        position={{
          x: property?.option.rect?.rLeft || 0,
          y: property?.option.rect?.rTop || 0,
        }}
      >
        <div
          style={{
            height: property?.option.rect?.rHeight + "px",
            width: property?.option.rect?.rWidth + "px",
          }}
          onClick={(e: any) => {
            e.stopPropagation();
          }}
        >
          1
          {/* {currentID === componentId ? <div className="shadow"></div> : null} */}
        </div>
      </Draggable>
    );
  }
}

const mapStateToProps: any = (state: stateType, ownProps: ownProps) => {
  const { components } = state.componentStateManager;
  const { currentID } = ownProps;
  let selectComponent = null;
  try {
    selectComponent = components[currentID];
  } catch (error) {
    console.log(error);
  }
  return {
    selectComponent: selectComponent,
  };
};
const mapDispatchToProps = {
  updateComponentRect,
};
export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps,
)(Dragger);
