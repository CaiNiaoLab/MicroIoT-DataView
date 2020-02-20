/** @format */

import React, { lazy, Suspense } from "react";
// import styled from "styled-components";
import {
  ComponentsOption,
  ComponentsMap,
  stateType,
} from "@/store/actions/actionType";
import { connect } from "react-redux";
import getCssText from "@/utils/getCssText";
import { selectComponent } from "@/store/actions/operation";

// const Container = styled.div`
//   position: absolute;
// `;

interface ownProps {
  currentID: keyof ComponentsMap;
}

interface Props extends ownProps {
  style: React.CSSProperties;
  option: ComponentsOption;
  componentType: string;
  selectComponent: Function;
}

export class CanvasComp extends React.Component<Props> {
  LazyRef = React.createRef<any>();
  compStyle = React.createRef<any>();
  componentDidMount() {
    // console.log("canvas comp mount");
    //component init
    const { option } = this.props;
    const { rect } = option;
    const { current } = this.compStyle;
    current.style.cssText += getCssText(rect);
  }

  handleClick = () => {
    const { selectComponent, currentID } = this.props;
    selectComponent(currentID);
  };

  shouldComponentUpdate(nextProps: Props) {
    const { option } = this.props;
    const { option: nextOption } = nextProps;
    // console.log(this.LazyRef.current);
    const { rect, echarts } = option;
    const { rect: nextRect, echarts: nextEcharts } = nextOption;
    const { current } = this.LazyRef;
    const { current: styleCurrent } = this.compStyle;
    if (rect !== nextRect) {
      styleCurrent.style.cssText += getCssText(nextRect);
      return false;
    }
    if (echarts !== nextEcharts) {
      current.echarts.current.getEchartsInstance().setOption(nextEcharts);
      return false;
    }
    return true;
  }

  render() {
    const { componentType, currentID, option } = this.props;
    const Lazy = lazy(() =>
      import(`@/components/comps_instance/${componentType}`),
    );

    return (
      <div
        ref={this.compStyle}
        style={{
          position: "absolute",
        }}
        onClick={this.handleClick}
      >
        <Suspense fallback={<>loading....</>}>
          <Lazy ref={this.LazyRef} componentId={currentID} option={option} />
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = (state: stateType, ownProps: ownProps) => {
  const { componentType, property } = state.componentStateManager.components[
    ownProps.currentID
  ];
  const { option, style } = property;
  return {
    style: style,
    option: option,
    componentType: componentType,
  };
};

const mapDispatchToProps = {
  selectComponent: selectComponent,
};

export default connect(mapStateToProps, mapDispatchToProps)(CanvasComp);
