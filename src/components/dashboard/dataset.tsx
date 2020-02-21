/** @format */

import React from "react";
import styled from "styled-components";
import {FormSelect} from "@/publicComponents/form";
import {formComponentConfigPath} from "@/utils/globalVars";

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 5px;
`;

export default class Dataset extends React.Component<any> {
    render() {
        const {componentId} = this.props;
        return (
            <Container>
                {componentId ? (<FormSelect
                    items={[
                        {
                            key: "test",
                            value: "test1",
                        },
                    ]}
                    model={formComponentConfigPath + componentId + ".dataset.dataMap.datasetId"}
                    label="233"
                    activeItem={"test"}
                ></FormSelect>) : (<>Select a component to start</>)}
            </Container>
        );
    }
}
