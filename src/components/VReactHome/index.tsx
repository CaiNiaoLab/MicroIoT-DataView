import * as React from 'react';
import { connect } from 'react-redux'

export interface IVReactHomeProps {
}

class VReactHome extends React.Component<IVReactHomeProps> {
  public render() {
    return (
      <div>
        
      </div>
    );
  }
}

const mapState2Props = (state:any) => {
  return {
     
  };
}

export default connect(mapState2Props)(VReactHome);
