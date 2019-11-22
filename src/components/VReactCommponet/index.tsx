import React, { Component } from 'react'
import { connect } from 'react-redux'
import  styled  from 'styled-components';

interface Props {
    
}
interface State {
    
}

export class VReactCommponet extends Component<Props, State> {
    state = {}

    render() {
        return (
            <VReactCommponetFramework>
                <div>A Widget</div>
            </VReactCommponetFramework>
        )
    }
}

const mapStateToProps = (state:any) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(VReactCommponet)

const VReactCommponetFramework = styled.div `
display:block;
height: 3rem;
width: 18vw;
font-size:24px;

text-align:center;

top:2pt;
position: relative;
`
