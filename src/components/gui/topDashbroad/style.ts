/** @format */

import React from "react";
import styled from "styled-components";
import { BGC } from "@/components/gui/publicStyledValue";

export const Container = styled.div`
  width: 100vw;
  height: 10vh;
  box-sizing: border-box;
  background-color: ${BGC};
  display: flex;
  align-items: center;
  .leftAction{
    flex:1;
    width:1px;
    height:100%;
  }
  .centerAction{
    flex:5;
    display:flex;
    height:100%;
    align-items:center;
    justify-content:space-around;
  }
  .rightAction{
    flex:1;
    height:100%;
  }
`;
