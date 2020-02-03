/** @format */

// import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .draggerContainer {
    // position: absolute;
    z-index: 10;
    .shadow {
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 11;
      height: 100%;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.1);
    }
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
