/** @format */

import React from "react";
import { connect } from "react-redux";
import Draggable, { DraggableEvent } from "react-draggable";
// import { defaultStateType } from "../store/reducers/componentStateManager";
import { updateComponentOption } from "../store/actions/operation";
import {
  stateType,
  UpdateComponentOptionReturn,
  Components
  // mapTypesToUnecessary
} from "../store/actions/actionType";

interface ownProps {
  currentID: string;
}

interface Props extends ownProps {
  selectComponent: Components;
  updateComponentOption?(payload: {
    x: number;
    y: number;
  }): UpdateComponentOptionReturn;
}

class Dragger extends React.Component<Props, any> {
  handlerDrag = (e: DraggableEvent, data: any) => {
    const { updateComponentOption } = this.props;
    if (updateComponentOption) {
      updateComponentOption({
        x: data.x,
        y: data.y
      });
    }
  };
  handlerDragStop = (e: any) => {
    e.stopPropagation();
  };
  render() {
    const { selectComponent, currentID } = this.props;
    const property = selectComponent ? selectComponent.property : undefined;
    console.log(property?.style);
    // const {option} = property;
    return (
      <Draggable
        bounds="parent"
        defaultPosition={{ x: 0, y: 0 }}
        onDrag={this.handlerDrag}
        onStop={this.handlerDragStop}
        defaultClassName="draggerContainer"
        position={{ x: property?.option.x || 0, y: property?.option.y || 0 }}
      >
        <div
          style={{
            height: property?.style.height + "px",
            width: property?.style.width + "px"
          }}
          onClick={(e: any) => {
            e.stopPropagation();
          }}
        >
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
    selectComponent: selectComponent
  };
};
const mapDispatchToProps = {
  updateComponentOption
};
export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps
)(Dragger);
