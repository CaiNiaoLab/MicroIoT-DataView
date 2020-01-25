/** @format */

import React from "react";
import {
  Components,
  UpdateComponentStyleParamter,
  stateType,
  mapTypesToUnecessary,
  AddNewComponent
} from "@/store/actions/actionType";
import {
  updateComponentStyle,
  addNewComponent
} from "@/store/actions/operation";
import { Container } from "@/components/gui/topDashbroad/style";
import { connect } from "react-redux";
import { MutliInputNumber, InputText } from "@/publicComponents/form";
import FormItem from "@/publicComponents/form/FormItem";
import { Fieldset } from "react-redux-form";
import { ButtonGroup, Button } from "@blueprintjs/core";
import uuid from "uuid";
import { Select } from "@blueprintjs/select";

interface OwnProps {}

interface ExpandProps extends OwnProps {
  components: { [key: string]: Components };
  currentComponentId: string;
  updateComponentStyle(param: UpdateComponentStyleParamter): Function;
  addNewComponent(param: AddNewComponent): Function;
}

class TopDashBroad extends React.Component<ExpandProps> {
  public addComponent = async () => {
    const componentId = uuid();
    const componentStruct: Components = {
      componentTitle: "",
      componentName: "",
      componentType: "echarts",
      isSelected: true,
      prevComponents: null,
      nextComponents: null
    };
    const property = (
      await import("@/components/comps_instance/echarts/config")
    ).default;
    const { addNewComponent } = this.props;
    componentStruct.property = property;
    addNewComponent({
      currentComponentId: componentId,
      component: componentStruct
    });
  };
  render() {
    const { currentComponentId } = this.props;
    return (
      <Container>
        <div className="leftAction">
          <Button onClick={this.addComponent}>添加组件</Button>
        </div>
        {currentComponentId ? (
          <Fieldset
            className="centerAction"
            model={`componentStateManager.components.${currentComponentId}.style`}
          >
            <div className="headCenterColumn">
              <div className="headCenterRow">
                <FormItem labels="尺寸">
                  <MutliInputNumber
                    models={[".width", ".height"]}
                  ></MutliInputNumber>
                </FormItem>
              </div>
              {currentComponentId ? (
                <div className="headCenterRow">
                  <FormItem labels="位置">
                    <MutliInputNumber
                      models={[".top", ".left"]}
                    ></MutliInputNumber>
                  </FormItem>
                </div>
              ) : null}
            </div>
            <div className="headCenterColumn">
              <div className="headCenterRow">
                <FormItem labels="旋转角度">
                  <InputText model=".rotate" />
                </FormItem>
              </div>
              <div className="headCenterRow">
                <FormItem labels="旋转中心">
                  {/* <Select>
                <option></option>
                <option></option>
              </Select> */}
                </FormItem>
              </div>
            </div>
          </Fieldset>
        ) : (
          <Fieldset className="centerAction" model="componentStateManager">
            <div className="headCenterColumn" style={{ width: "40%" }}>
              <div className="headCenterRow">
                <FormItem labels="画布尺寸">
                  <MutliInputNumber
                    models={[".canvasWidth", ".canvasHeigh"]}
                  ></MutliInputNumber>
                </FormItem>
              </div>
            </div>
          </Fieldset>
        )}

        <div className="rightAction">
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
  state: stateType
): mapTypesToUnecessary<ExpandProps> => {
  const store = state.componentStateManager;
  return {
    currentComponentId: store.currentComponentId,
    components: store.components
  };
};

const mapDispatchToProps = {
  updateComponentStyle,
  addNewComponent
};

export default connect<any, any, any>(
  mapStatToProps,
  mapDispatchToProps
)(TopDashBroad);
