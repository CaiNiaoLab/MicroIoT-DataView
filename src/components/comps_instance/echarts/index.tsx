import React from "react";
import EchartsFR from "echarts-for-react";
import { ComponentsOption, ComponentsMap } from "@/store/actions/actionType";

interface Props {
  styles?: React.CSSProperties;
  option?: ComponentsOption;
  componentId: keyof ComponentsMap;
}

export default class EchartsInstance extends React.Component<Props> {
  echarts: any = React.createRef();

  componentDidMount() {
    console.log("echarts mount");
  }

  shouldComponentUpdate(nextProps: Props) {
    console.log(nextProps.option !== this.props.option);

    if (nextProps.option !== this.props.option) {
      this.handleData();
      return false;
    }
    return true;
  }

  handleData = () => {
    const { option } = this.props;
    this.echarts.current.getEchartsInstance().setOption(option?.echarts);
  };

  // componentDidUpdate() {
  //   this.handleData();
  // }

  render() {
    const { option } = this.props;
    return (
      <EchartsFR
        option={option?.echarts || {}}
        ref={this.echarts}
        lazyUpdate={false}
        notMerge={false}
        style={{
          height: "100%",
          width: "100%"
        }}
      />
    );
  }
}
