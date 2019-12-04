/* .container {
    height: 100%;
    width: 100%;
    margin: 0px 5px 0px 5px;
    padding: 5px;
    box-sizing: border-box;
    background-color: #fff;
    overflow: auto;
}
.container > h3{
    margin: 0px;
}
.container > div{
    height: 44px;
    display: flex;
    align-items: center;
    padding-left:10px;
    border-bottom: 1px solid #22222233; 
    position: relative;
}
.selector {
    height: 34px;
    border: 1px solid #22222233; 
    border-radius: 5px;
    text-indent: 1em;
    width: 60%;
    outline: none;
} */

import styled from 'styled-components';

export const Container = styled.div`
 height: 100%;
    width: 100%;
    margin: 0px 5px 0px 5px;
    padding: 5px;
    box-sizing: border-box;
    background-color: #fff;
    overflow: auto;
    h3{
        margin: 0px; 
    }
    div{
        height: 44px;
        display: flex;
        align-items: center;
        padding-left:10px;
        border-bottom: 1px solid #22222233; 
        position: relative;
        .selector {
            height: 34px;
            border: 1px solid #22222233; 
            border-radius: 5px;
            text-indent: 1em;
            width: 60%;
            outline: none;
        }
    }
`