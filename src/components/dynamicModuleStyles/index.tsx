import React from 'react';
import { State, Props } from './interface';
import Seletor from '../../publicComponents/selector';
import { SketchPicker } from 'react-color';
import { store } from '../../store';
import {Input} from 'antd';
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
    componentDidMount(){
        store.subscribe(()=>{
            let state = store.getState();
            console.log(state)
            // this.setState({
            //     currentElement:state.ChangeStyles
            // })
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
    getColorChange = (key:string,color:any) =>{
        store.dispatch({
            type:'getStylesChange',
            styles:color.hex
        })
    }
    render() {
        return (
            <Container className="container">
                <h3>Modules Styles Setting:</h3>
                <div onMouseEnter={() => this.highLight()}>parent</div>
                <div>
                    height
                    <Input/>
                </div>
                <div>width</div>
                <div>
                    <button onClick={() => this.colorPicker('bgc')}>bgc</button>
                    {this.state.bgcPicker ? 
                    <div style={{ position: 'relative', zIndex: 1000 }}> <SketchPicker onChange={(color:any)=>{this.getColorChange('bgc',color)}} /></div> : null}
                </div>
                <div>bgi</div>
                <div>
                    <Seletor className="selector" getValue={this.getValue} data={[{ key: "test", value: "test" }, { key: "test1", value: "test1" }]} />
                </div>
                <div>font-size</div>
                <div>font-position</div>
                <div>
                    <button onClick={() => this.colorPicker('font-color')}>font-color</button>
                    {this.state.fontColorPicker ? <div style={{ position: 'relative', zIndex: 1000 }}> <SketchPicker /></div> : null}
                </div>
                <div>border-radius</div>
                <div>border</div>
                <div>preset-position-for-parent</div>
                <div>preset-position-for-fixed</div>
            </Container>
        )
    }
}