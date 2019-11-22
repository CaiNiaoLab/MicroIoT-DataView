import * as React from 'react';
import { connect } from 'react-redux'

//import './css.less'
import styled from 'styled-components'
//import rbd from 'react-beautiful-dnd'

import { VReactDrawWindow, VReactCommponet, VReactCommponetDetailArea } from '..';

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
          <VReactCommponet />
          <VReactCommponet />
          <VReactCommponet />
        </VReactCommponets>
        <VReactDrawWindow />
        <VReactCommponetDetail>
           <VReactCommponetDetailArea />
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
background-color:blueviolet;

top:0;
position: fixed;
`

const VReactCommponetDetail = styled.div `
height:95vh;
width:20vw;
display:inline-block;
background-color:gray;

right:0;
top:5vh;
position: fixed;
`
const VReactCommponets = styled.div `
height:95vh;
width:20vw;
display:inline-block;
background-color:var(v-react-primary-color);

left:0;
top:5vh;
position: fixed;
`