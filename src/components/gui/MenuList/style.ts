/** @format */

import React from "react";
import styled from "styled-components";

interface Props {
  isSelect: boolean;
}

export const Container = styled.div`
  max-height:90vh;
  min-width: 20vw;
`;

export const ListItemContainer = styled.div`
  height:55px;
  width:100%;
  background-color:${({ isSelect }: Props) => isSelect ? 'blue' : ''}
  .itemTitle{
    height:50%;
    width:100%;
  }
  .itemContent{
    height:50%;
    width:100%;
  }
`;