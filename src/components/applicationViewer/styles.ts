import styled from 'styled-components';

export const Container = styled.div `
  width: 55vw;
  height: 100vh;
  background-color: #ddd;
  position: relative;

 h1 {
  text-align: center;
  color: #888;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #aaaaaadd;
}
.layoutPickerArea {
  width: 100%;
  height: 20%;
  align-items: center;
  justify-content: center;
  display: flex;
  .layoutPickerScrollContaienr {
    width: 90%;
    height: auto;
    overflow: hidden;
    .layoutPickerScroll {
      width: auto;
      min-width: 90%;
      display: flex;
      height: 100%;
      align-items: center;
      .layoutItemContainer {
        width: 120px;
        height: 90px;
        flex-shrink: 0;
        margin: 5px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
      }
    }
  }
}

.draggableMain {
  width: 100%;
  height: 80%;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  padding: 10px;
  .draggable {
    flex: 3;
    box-sizing: border-box;
    position: relative;
    background-color: transparent;
    .draggableItem {
      width: 34px;
      height: 34px;
      border: 1px solid #222;
    }
  }
}
.modulesInfo {
  flex: 4;
}

`;