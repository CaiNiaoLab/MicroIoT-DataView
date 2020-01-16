import React from 'react';
import { connect } from 'react-redux';
import EchartsFR from 'echarts-for-react';
import { ComponentsOption, stateType } from '@/store/actions/actionType';

interface Props {
  styles: React.CSSProperties;
  option: ComponentsOption;
  componentId: string;
}

export default class EchartsInstance extends React.Component<Props>{
  echarts: any = React.createRef();

  handleData = () => {
    const { option } = this.props;
    this.echarts.current.getEchartsInstance().setOption(option);
  };

  componentDidUpdate() {
    this.handleData();
  }

  render() {
    const { option, styles } = this.props;
    return (
      <div style={{
        height: '100%',
        width: '100%',
        ...styles
      }}>
        <EchartsFR
          option={option}
          ref={this.echarts}
          lazyUpdate={false}
          notMerge={false}
        />
      </div>
    )
  }
}
