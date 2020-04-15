/** @format */

import styled from "styled-components";

interface Props {
  isSelect: boolean;
}

export const Container = styled.div`
  max-height: 90vh;
  min-width: 20vw;
  border: 1px solid #000;
  .menuHeader {
    display: flex;
    background-color: #30404d;
    border-radius: 5px 5px 0px 0px;
    padding: 5px;
    .menuTitle {
      flex: 4;
    }
  }
  .menuContainer {
    height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
    &::-webkit-scrollbar-track {
      background: #1c222b;
    }
    &::-webkit-scrollbar-thumb {
      background: #434b55;
      border: 1px solid #434b55;
    }
    &::-webkit-scrollbar-corner {
      background-color: transparent;
    }
  }
`;

export const ListItemContainer = styled.div`
  height: 55px;
  width: 100%;
  background-color: ${({ isSelect }: Props) => (isSelect ? "blue" : "#30404d")};
  padding: 5px;
  border-top: 1px solid #000;
  .itemTitle {
    height: 50%;
    width: 100%;
  }
  .itemContent {
    height: 50%;
    width: 100%;
  }
`;
