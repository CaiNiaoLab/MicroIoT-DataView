/** @format */

import React from "react";
import styled from "styled-components";
import { FormSelect } from "@/components/form";
import { formComponentConfigPath } from "@/utils/globalVars";

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 5px;
`;

export default class Dataset extends React.Component<any> {
  render() {
    const { componentId } = this.props;
    return (
      <Container>
        data
        <FormSelect
          model={
            formComponentConfigPath + "." + componentId + ".dataset.datasetId"
          }
        >
          <option value="test">test</option>
          <option value="test1">test</option>
        </FormSelect>
      </Container>
    );
  }
}
