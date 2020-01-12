/** @format */

import React from "react";
import {
  Components,
  UpdateComponentStyleParamter,
  stateType,
  mapTypesToUnecessary,
} from "@/store/actions/actionType";
import { updateComponentStyle } from "@/store/actions/operation";
import { Container } from "@/components/gui/topDashbroad/style";
import { connect } from "react-redux";
import { MutliInputNumber } from "@/publicComponents/form";
import FormItem from "@/publicComponents/form/FormItem";
import { Fieldset } from "react-redux-form";
import { ButtonGroup, Button } from "@blueprintjs/core";

interface OwnProps {}

interface ExpandProps extends OwnProps {
  components: { [key: string]: Components };
  currentComponentId: string;
  updateComponentStyle(param: UpdateComponentStyleParamter): Function;
}

class TopDashBroad extends React.Component<ExpandProps> {
  render() {
    const { currentComponentId } = this.props;
    return (
      <Container>
        <div className=""></div>
        <Fieldset
          className=""
          model={`componentStateManager.components.${currentComponentId}.style`}
        >
          <div className="">
            <FormItem labels="尺寸">
              <MutliInputNumber
                models={[".width", ".height"]}
              ></MutliInputNumber>
            </FormItem>
          </div>
          <div className="">
            <FormItem labels="位置">
              <MutliInputNumber
                models={[".width", ".height"]}
              ></MutliInputNumber>
            </FormItem>
          </div>
        </Fieldset>
        <div className="">
          <div className="">
            <ButtonGroup>
              <Button>save</Button>
              <Button>export</Button>
              <Button>import</Button>
            </ButtonGroup>
          </div>
          <div className=""></div>
        </div>
      </Container>
    );
  }
}

const mapStatToProps: any = (
  state: stateType,
): mapTypesToUnecessary<ExpandProps> => {
  const store = state.componentStateManager;
  return {
    currentComponentId: store.currentComponentId,
    components: store.components,
  };
};

const mapDispatchToProps = {
  updateComponentStyle,
};

export default connect<any, any, mapTypesToUnecessary<ExpandProps>>(
  mapStatToProps,
  mapDispatchToProps,
)(TopDashBroad);
