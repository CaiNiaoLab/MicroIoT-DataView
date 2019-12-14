import React from 'react';
import { connect } from 'react-redux';

export default function (WapperComponent: React.ComponentClass) {
  class HOC extends WapperComponent {
    render() {
      console.log(this.props);
      return super.render();
    }
  }

  return (mapStateToProps: any | null, mapDispatchToPorps?: any) => connect(mapStateToProps, mapDispatchToPorps)(HOC);
}