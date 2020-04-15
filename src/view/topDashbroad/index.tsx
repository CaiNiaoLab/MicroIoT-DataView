/** @format */

import React from "react";
import {
  Components,
  UpdateComponentStyleParamter,
  stateType,
  // mapTypesToUnecessary,
  AddNewComponent,
} from "@/store/actions/actionType";
import {
  updateComponentStyle,
  addNewComponent,
} from "@/store/actions/operation";
import { Container } from "@/view/topDashbroad/style";
import { connect } from "react-redux";
import { MutliInputNumber, InputText } from "@/components/form";
import FormItem from "@/components/form/baseForm/FormItem";
import { Fieldset } from "react-redux-form";
import { ButtonGroup, Button } from "@blueprintjs/core";
import uuid from "uuid";
// import { Select } from "@blueprintjs/select";

interface OwnProps {}

interface ExpandProps extends OwnProps {
  components: { [key: string]: Components };
  currentComponentId: string;
  updateComponentStyle(param: UpdateComponentStyleParamter): Function;
  addNewComponent(param: AddNewComponent): Function;
}

class TopDashBroad extends React.Component<ExpandProps> {
  public addComponent = async () => {
    const componentId = uuid();//32位，可选由后端生成
    const componentStruct: Components = {
      componentTitle: "",
      componentName: "",
      componentType: "echarts",
      status: {
        isSelected: true,
        isLock: false,
        isHide: false,
      },
      prevComponents: null,
      nextComponents: null,
      property: (await import("@/components/comps_instance/echarts/config"))
        .default,
    };
    // const property = ;
    const { addNewComponent } = this.props;
    // componentStruct.property = property;
    addNewComponent({
      currentComponentId: componentId,
      component: componentStruct,
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
            model={`componentStateManager.components.${currentComponentId}.property`}
          >
            <div className="headCenterColumn">
              <Fieldset model=".option.rect" className="headCenterRow">
                <FormItem labels="尺寸">
                  <MutliInputNumber
                    models={[".rWidth", ".rHeight"]}
                  ></MutliInputNumber>
                </FormItem>
              </Fieldset>
              <Fieldset model=".option.rect" className="headCenterRow">
                <FormItem labels="位置">
                  <MutliInputNumber
                    models={[".rLeft", ".rTop"]}
                  ></MutliInputNumber>
                </FormItem>
              </Fieldset>
            </div>
            <div className="headCenterColumn">
              <div className="headCenterRow">
                <FormItem labels="旋转角度">
                  <InputText model=".rotate" />
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
              <Button>preview</Button>
            </ButtonGroup>
          </div>
          <div className=""></div>
        </div>
      </Container>
    );
  }
}

const mapStatToProps: any = (state: stateType) => {
  const store = state.componentStateManager;
  return {
    currentComponentId: store.currentComponentId,
    components: store.components,
  };
};

const mapDispatchToProps = {
  updateComponentStyle,
  addNewComponent,
};

export default connect<any, any, any>(
  mapStatToProps,
  mapDispatchToProps,
)(TopDashBroad);
