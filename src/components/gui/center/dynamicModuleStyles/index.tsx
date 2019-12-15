import React from 'react';
import { State, Props } from './interface';
import Seletor from '../../../../publicComponents/selector';
import { SketchPicker } from 'react-color';
import { store } from '../../../../store';
import { InputGroup } from '@blueprintjs/core';
import { Container } from './styles';

export default class ModulesStyles extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            bgcPicker: false,
            fontColorPicker: false
        }
        console.log(this.props)
    }
    highLight = (element?: JSX.Element | HTMLDivElement | HTMLElement) => {

    }
    componentDidMount() {
        store.subscribe(() => {
            let state = store.getState();
        })
    }
    getValue = (value: string, key?: string) => {
        console.log(value);
    }
    colorPicker = (flag: string) => {
        console.log(flag)
        switch (flag) {
            case 'bgc':
                this.state.bgcPicker ? this.setState({ bgcPicker: false }) : this.setState({ bgcPicker: true })
                break;
            case 'font-color':
                this.state.fontColorPicker ? this.setState({ fontColorPicker: false }) : this.setState({ fontColorPicker: true })
                break;
        }
    }
    getColorChange = (key: string, color: any) => {
        store.dispatch({
            type: 'getStylesChange',
            styles: color.hex
        })
    }
    render() {
        return (
            <Container className="container">
                <h3>Modules Styles Setting:</h3>
                <div className="baseClass">
                    size
                    {/* <Input/> */}
                    <InputGroup />
                    <InputGroup />
                </div>
                <div className="baseClass">
                    position
                    <InputGroup />
                    <InputGroup />
                </div>
                <div>
                    <button onClick={() => this.colorPicker('bgc')}>bgc</button>
                    {this.state.bgcPicker ? <div style={{ position: 'relative', zIndex: 1000 }}> <SketchPicker onChange={(color: any) => { this.getColorChange('bgc', color) }} /></div> : null}
                </div>
                <div>bgi
                    <InputGroup />

                </div>
                <div className="baseClass">
                    <Seletor className="selector" getValue={this.getValue} data={[{ key: "test", value: "test" }, { key: "test1", value: "test1" }]} />
                </div>
                <div className="baseClass">font-size
                    <InputGroup />

                </div>
                <div className="baseClass">font-position
                    <InputGroup />

                </div>
                <div>
                    <button onClick={() => this.colorPicker('font-color')}>font-color</button>
                    {this.state.fontColorPicker ? <div style={{ position: 'relative', zIndex: 1000 }}> <SketchPicker /></div> : null}
                </div>
                <div className="baseClass">border-radius
                    <InputGroup />

                </div>
                <div className="baseClass">border
                    <InputGroup />

                </div>
                <div> className="baseClass"preset-position-for-parent
                    <InputGroup />

                </div>
                <div className="baseClass">preset-position-for-fixed
                    <InputGroup />

                </div>
            </Container>
        )
    }
}