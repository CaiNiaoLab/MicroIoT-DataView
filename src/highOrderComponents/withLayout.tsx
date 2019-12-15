import React from 'react';
import {connect} from 'react-redux';
import { ChangeComponentBoundType, Components, stateType, mapTypesToUnecessary } from '../store/actions/actionType';
import { changeComponentBound, addNewComponent } from '../store/actions/operation';

interface Props {
  canvasPart: string;
  changeComponentBound: Function;
}

const mapStateToProps: any = (state: stateType) => {
  const canvasPart = state.componentStateManager.canvasPart;
  console.log(state);
  return {
      canvasPart: canvasPart
  }
}
const mapDispatchToProps = {
  changeComponentBound,
  addNewComponent
}
 ;
export default function (Wapper:any){
   class  HOC extends React.Component<mapTypesToUnecessary<Props>> {
    render(){
      return (
        <Wapper {...this.props}/>
      )
    }
  }
  return connect<any, any, Props>(mapStateToProps, mapDispatchToProps)(HOC);
}