/** @format */

import React from "react";
import Top from "@/components/gui/topDashbroad";
import Center from "@/components/gui/center";
import RightSide from "@/components/gui/rightside";
import LeftSide from '@/components/gui/MenuList';

export interface Props { }
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
        style={{
          height: "100vh",
          width: "100vw",
          boxSizing: "border-box",
          overflow: 'hidden'
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
            // overflow:'hidden'
          }}>
          <LeftSide />
          <Center />
          <RightSide />
        </div>
      </div>
    );
  }
}
