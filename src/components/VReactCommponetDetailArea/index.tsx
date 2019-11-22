import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Collapse } from 'antd'

import 'antd/lib/collapse/style/css'

interface Props {
    
}
interface State {
    
}

export class VReactCommponetDetail extends Component<Props, State> {
    state = {}

    render() {
        return (
            <Collapse>
                <Collapse.Panel key={'testA'} header={'A'}>

                </Collapse.Panel>
            </Collapse>
        )
    }
}

const mapStateToProps = (state:any) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(VReactCommponetDetail)
