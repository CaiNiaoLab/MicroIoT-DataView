// .container{
//     height: 80px;
//     width: 100%;
//     box-sizing: border-box;
//     padding: 5px;
//     box-shadow: 0px 0px 2px rgba(34,34,34,1);
//     border-radius: 8px;
//     display: flex;
//     flex-direction: column;
//     margin: 10px 0px 0px 0px;
// }
// .modulesInfoArea{
//     width: 100%;
//     flex: 3;
//     display: flex;
//     padding: 5px;
//     justify-content: space-evenly;
//     align-items: center;
//     box-sizing: border-box;
//     border-bottom: 1px rgba(34,34,34,.25) solid;
// }
// .buttonGrop{
//     flex: 1;
//     display: flex;
//     align-items: center;
//     padding: 2px;
// }
// .buttonGrop > button {
//     min-width: 65px;
//     padding: 3px;
//     border: 1px rgba(34,34,34,.25) solid;
//     margin: 0px 3px 0px 0px;
//     background-color: #fff;
//     border-radius: 5px;
//     text-align: center;
// }

import styled from 'styled-components';

export const Container = styled.div`
    height: 80px;
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
    box-shadow: 0px 0px 2px rgba(34,34,34,1);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    margin: 10px 0px 0px 0px;
    .modulesInfoArea{
        width: 100%;
        flex: 3;
        display: flex;
        padding: 5px;
        justify-content: space-evenly;
        align-items: center;
        box-sizing: border-box;
        border-bottom: 1px rgba(34,34,34,.25) solid;
    }
    .buttonGrop{
        flex: 1;
        display: flex;
        align-items: center;
        padding: 2px;
        button {
            min-width: 65px;
            padding: 3px;
            border: 1px rgba(34,34,34,.25) solid;
            margin: 0px 3px 0px 0px;
            background-color: #fff;
            border-radius: 5px;
            text-align: center;
        }
    }

`