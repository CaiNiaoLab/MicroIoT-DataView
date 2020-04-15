/** @format */

import React from "react";
import { formRootPath, formComponentConfigPath } from "@/utils/globalVars";
import { ComponentsMapKeysType } from "@/store/actions/actionType";
import { Fieldset } from "react-redux-form";
import FormItem from "@/components/form/baseForm/FormItem";

interface Props {
  currentID: ComponentsMapKeysType | ComponentsMapKeysType[];
}

export default class BasicStyle extends React.Component<Props> {
  render() {
    const { currentID } = this.props;
    return (
      <Fieldset model={formComponentConfigPath}>
        <FormItem labels=""></FormItem>
      </Fieldset>
    );
  }
}
