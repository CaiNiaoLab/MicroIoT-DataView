/** @format */

import React from "react";
import Draggable from "react-draggable";
import { InputText } from "@/publicComponents/form";

interface ListProps {
  componentsKeysArray: string[];
}

interface ItemProps {
  componentId: string;
  componentTitle: string;
}

const ListItem = (props: ItemProps) => {
  const { componentId, componentTitle } = props;
  return (
    <div>
      <div className="">
        <InputText model={`.${componentId}.${componentTitle}`} />
      </div>
      <div className=""></div>
    </div>
  );
};

export default class ComponentsList extends React.Component<ListProps> {
  render() {
    const { componentsKeysArray } = this.props;
    return <Draggable></Draggable>;
  }
}
