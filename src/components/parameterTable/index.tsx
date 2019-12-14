import React from 'react';
// import {Button,ButtonGroup} from '@blueprintjs/core';
import { State, Props } from './interface';
import { Container } from './styles';
export default class ParameterTable extends React.Component<Props, State>{
    constructor(props: any) {
        super(props);
        this.state = {
            deviceID: 1,
            isStyleSetting: true
        }
    }
    render() {
        return (
            <Container>
                <div className="parameterSet">
                    <div className="buttonGroup">
                        <button>Simaple</button>
                        <button>Detail</button>
                    </div>
                    {this.state.deviceID ? null :
                        <h1>
                            Select or add a module to start parameter configuration
                        </h1>
                    }
                    <div className="parameterItem">
                        <label>Module Features</label>
                        <input placeholder="" />
                    </div>
                    <div className="parameterItem">
                        <label>Module Parameter</label>
                        <input placeholder="" />
                    </div>
                    <div className="parameterItem">
                        <label>Module Topic</label>
                        <input placeholder="" />
                    </div>
                    <div className="parameterItem">
                        <label>Command Key</label>
                        <input placeholder="" />
                    </div>
                    <div className="parameterItem">
                        <label>Command Value</label>
                        <input placeholder="" />
                    </div>
                </div>
            </Container>
        )
    }
}