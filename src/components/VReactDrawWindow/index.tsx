import * as React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';

export interface IVReactDrawWindowProps {
}

class VReactDrawWindow extends React.Component<IVReactDrawWindowProps> {
  public render() {
    return (
      <VReactDrawWindowFrameWork>

        </VReactDrawWindowFrameWork>
    );
  }
}

const mapState2Props = (state:any) => {
  return {
  };
}

export default connect(mapState2Props)(VReactDrawWindow);

const VReactDrawWindowFrameWork = styled.div `
height:95vh;
width:60vw;
display:inline-block;
background-color:black;

top:5vh;
left:20vw;
position: relative;
`