// .container{
//     width: 100%;
//     height: 100%;
//     box-sizing: border-box;
// }

import styled from 'styled-components';

export const Container = styled.div`
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    border: 20px solid #000;
    border-left: 10px solid #000;
    border-right: 10px solid #000;
    border-radius: 15px;
    background: #fff;
    .globalHeader {
        height: 10%;
        width: 100%;
        box-sizing: border-box;
        border-bottom: 1px solid #22222222;
        display: flex;
        align-items: center;
        padding-left: 10px;
    }
` 