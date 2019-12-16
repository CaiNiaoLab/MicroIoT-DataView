import React from 'react';
import { connect } from 'react-redux';

export default function (WapperComponent: React.ComponentClass) {
  class HOC extends React.Component {
    state = {
      updateOn: ''
    }
    handleChange = () => {

    }
    handleFocus = () => {

    }
    handleBlur = () => {

    }
    render() {
      // console.log(this.props);
      return <WapperComponent />
    }
  }

  return (mapStateToProps: any | null, mapDispatchToPorps?: any) => connect(mapStateToProps, mapDispatchToPorps)(HOC);
}