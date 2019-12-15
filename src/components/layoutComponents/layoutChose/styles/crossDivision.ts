import styled from 'styled-components';

export const Top = styled.div `
{
    height: 40%;
    width: 100%;
    position: relative;
    box-sizing: border-box;   
    display: flex; 
    div{
        flex: 1;
        height: 100%;
        position: relative;
        div{
            height: 44px;
            width: 80px;
            word-wrap: break-word;
            border: 1px solid #222;
            font-size: 14px;
            padding: 5px;
        }
    }
}`

export const Bottom = styled.div `
{
    border-top: 1px solid #22222233; 
    height: 60%;
    width: 100%;
    position: relative;
    box-sizing: border-box;    
    display: flex; 
    div{
        flex: 1;
        height: 100%;
        position: relative;
        div{
            height: 44px;
            width: 80px;
            word-wrap: break-word;
            border: 1px solid #222;
            font-size: 14px;
            padding: 5px;
        }
    }
    .left {
        border-right: 1px solid #22222233; 
    }
}
`