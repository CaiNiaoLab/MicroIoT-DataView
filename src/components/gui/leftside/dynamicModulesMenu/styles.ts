/* .container{
    height: 100vh;
    width: 22vw;
    box-sizing: border-box;
    padding: 5px;
    box-shadow: 0px 0px 1px rgba(34,34,34,.25)
}
.typeChose{
    width: 100%;
    height: 34px;
    border: 1px solid rgba(34,34,34,.25);
    border-radius: 5px;
    margin:5px 0px 5px 0px;
} */

import styled from 'styled-components';

export const Container = styled.div`

    height: 100vh;
    width: 22vw;
    box-sizing: border-box;
    padding: 5px;
    box-shadow: 0px 0px 1px rgba(34,34,34,.25)
    .typeChose{
        width: 100%;
        height: 34px;
        border: 1px solid rgba(34,34,34,.25);
        border-radius: 5px;
        margin:5px 0px 5px 0px;
    } 
    .componentListTitle{
        width: 100%;
        height:auto;
        display:flex;
        align-items:center;
        text-align:left;
        padding: 5px 0px;
        justify-content:flex-end;
        p{
            flex:1;
            margin:0px;
        }
    }
`;