/** @format */

import React from "react";
import { connect } from "react-redux";
import Draggable, { DraggableEvent } from "react-draggable";
import { defaultStateType } from "../store/reducers/componentStateManager";
import { updateComponentOption } from "../store/actions/operation";
import {
  stateType,
  UpdateComponentOptionReturn,
  Components,
  mapTypesToUnecessary
} from "../store/actions/actionType";

interface ownProps {
  children: React.ReactNode;
  componentId: string;
}

interface Props extends ownProps {
  selectComponent: Components;
  updateComponentOption?(payload: {
    x: number;
    y: number;
  }): UpdateComponentOptionReturn;
}

class Dragger extends React.Component<mapTypesToUnecessary<Props>, any> {
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
    const { children, selectComponent } = this.props;
    const property = selectComponent ? selectComponent.property : undefined;
    return (
      <Draggable
        bounds="parent"
        defaultPosition={{ x: 0, y: 0 }}
        onDrag={this.handlerDrag}
        onStop={this.handlerDragStop}
      >
        <div
          style={property?.style}
          onClick={(e: any) => {
            e.stopPropagation();
          }}
        >
          {React.Children.map(children, (element: any) => {
            return React.cloneElement(element, { ...selectComponent });
          })}
        </div>
      </Draggable>
    );
  }
}

const mapStateToProps: any = (state: stateType, ownProps: ownProps) => {
  const { components } = state.componentStateManager;
  const { componentId } = ownProps;
  let selectComponent = null;
  try {
    selectComponent = components[componentId];
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
export default connect<any, any, mapTypesToUnecessary<Props>>(
  mapStateToProps,
  mapDispatchToProps
)(Dragger);
