/** @format */
import styled from "styled-components";
import { BGC } from "@/view/publicStyledValue";

export const Container = styled.div`
  width: 100vw;
  height: 10vh;
  box-sizing: border-box;
  background-color: ${BGC};
  display: flex;
  align-items: center;
  .leftAction {
    flex: 2;
    width: 1px;
    height: 100%;
  }
  .centerAction {
    flex: 5;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
  }
  .rightAction {
    flex: 1;
    height: 100%;
  }
  .headCenterColumn {
    display: flex;
    justify-content: center;
    height: 100%;
    flex-direction: column;
    width: 30%;
    // &:last-child{
    //   flex:1;
    // }
  }
  .headCenterRow {
    display: flex;
    align-items: space-around;
    height: 40%;
    padding: 5px;
  }
`;
