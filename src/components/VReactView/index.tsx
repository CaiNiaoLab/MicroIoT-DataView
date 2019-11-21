import * as React from 'react';
import { connect } from 'react-redux'

//import './css.less'
import styled from 'styled-components'
import { VReactDrawWindow } from '..';

export interface IVReactViewProps {

}

class VReactView extends React.Component<IVReactViewProps> {
  public render() {
    return (
      //head 组件选择 预览
      //左侧组件栏
      //右侧属性配置栏
      //中间画板
      <VReactFrameWork>
        <VReactHeader>

        </VReactHeader>
        <VReactCommponets>

        </VReactCommponets>
        <VReactDrawWindow />
        <VReactCommponetDetail>
          
        </VReactCommponetDetail>
        </VReactFrameWork>
    );
  }
}

const mapState2Props = (state:any) => {
  return {
    
  };
}

export default connect(mapState2Props)(VReactView);

const VReactFrameWork = styled.div `
height:100vh;
width:100vw;
display:block;
background-color:beige;
`
const VReactHeader = styled.div `
height:5vh;
width:100vw;
display:block;
background-color:yellowgreen;
`

const VReactCommponetDetail = styled.div `
height:95vh;
width:20vw;
display:inline-block;
background-color:palegreen;
`
const VReactCommponets = styled.div `
height:95vh;
width:20vw;
display:inline-block;
background-color:palegreen;
`