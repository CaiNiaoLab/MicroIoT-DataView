/** @format */

import React from "react";
import Draggable from "react-draggable";
import { InputText } from "@/publicComponents/form";
import { Container, ListItemContainer } from '@/components/gui/MenuList/style';
import { connect } from "react-redux";
import { stateType } from "@/store/actions/actionType";
import { store } from "@/store";

interface ListProps {
  componentsKeysArray: string[];
}

interface ItemProps {
  componentId: string;
  componentTitle: string;
  isSelect: boolean;
}

const ListItem = (props: ItemProps) => {
  const { componentId, componentTitle, isSelect } = props;
  return (
    <ListItemContainer isSelect={isSelect} >
      <div className="itemTitle">
        <InputText model={`.${componentId}.${componentTitle}`} />
      </div>
      <div className="itemContent"></div>
    </ListItemContainer>
  );
};

class ComponentsList extends React.Component<ListProps> {
  render() {
    const { componentsKeysArray } = this.props;
    const { components } = (store.getState() as stateType).componentStateManager;
    return (
      <Draggable>
        <Container>
          {componentsKeysArray.map((item: any, index: number) => <ListItem
            componentId={item}
            componentTitle={components[item].componentTitle}
            isSelect={components[item].isSelected}
            key={index}
          />)}
        </Container>
      </Draggable>
    );
  }
}

const mapStateToProps = (state: stateType) => {
  const { components } = state.componentStateManager;
  const componentsKeysArray = Object.keys(components);
  return {
    componentsKeysArray: componentsKeysArray
  }
}

export default connect(mapStateToProps)(ComponentsList);