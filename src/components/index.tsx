/** @format */

import React from "react";
import Top from "@/components/gui/topDashbroad";
import Center from "@/components/gui/center";
import RightSide from "@/components/gui/rightside";
import LeftSide from "@/components/gui/MenuList";
import { store } from "@/store";
import { stateType } from "@/store/actions/actionType";

export interface Props {}
interface State {
  isOld: boolean;
}
export default class Hello extends React.Component<Props, object> {
  constructor(props: any) {
    super(props);
  }
  render() {
    const state: stateType = store.getState();
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          boxSizing: "border-box",
          overflow: "hidden"
        }}
      >
        <Top />
        <div
          className="bp3-dark"
          style={{
            display: "flex",
            height: "90vh",
            width: "100vw",
            boxSizing: "border-box",
            backgroundColor: "#30404d",
            position: "relative"
            // overflow:'hidden'
          }}
        >
          {/* <LeftSide /> */}
          <Center />
          <RightSide />
        </div>
      </div>
    );
  }
}
