// .container{
//     width: 100%;
//     height: 80px;
//     box-sizing: border-box;
//     display: flex;
//     border-bottom: 1px solid rgba(34,34,34,.25);
// }


import styled from 'styled-components';

export const Container = styled.div `
width: 100%;
height: 80px;
box-sizing: border-box;
display: flex;
border-bottom: 1px solid rgba(34,34,34,.25);
.image{
    width: 64px;
    height: 64px;
    border: 2px solid royalblue;
}
.userInfo{
    display: flex;
    padding-left:5px; 
    flex: 1;
}
`