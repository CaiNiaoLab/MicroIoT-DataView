/** @format */

import React from "react";

export interface Props {}
interface State {
  isOld: boolean;
}
export default class Hello extends React.Component<Props, object> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div
        className="bp3-dark"
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          boxSizing: "border-box",
          // overflow:'hidden'
        }}
      ></div>
    );
  }
}
