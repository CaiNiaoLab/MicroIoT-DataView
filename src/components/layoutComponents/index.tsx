/** @format */

import React from "react";
import { State, Props } from "./interface";
// import ImportHOC from '../../highOrderComponents/importComponents';
import { Container } from "./styles";
import { connect } from "react-redux";
import { stateType } from "../../store/actions/actionType";

class LayoutComponents extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentLayout: "not chose",
      currentType: "",
    };
  }
  layoutChosen = async () => {
    const { canvasType } = this.props;
    const CurrentLayout = (await import("./layoutChose/" + canvasType)).default;
    return <CurrentLayout />;
  };
  render() {
    return (
      <Container>
        <header className="globalHeader">IOT open platform</header>
        <div style={{ height: "90%", width: "100%", boxSizing: "border-box" }}>
          {this.state.currentLayout}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state: stateType) => {
  const { canvasType } = state.componentStateManager;
  return {
    canvasType: canvasType,
  };
};

export default connect(mapStateToProps)(LayoutComponents);
