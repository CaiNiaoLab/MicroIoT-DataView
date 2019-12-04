import React from 'react';
import { State, Props } from './interface';
import Draggable from 'react-draggable';
import LayoutEdit from '../layoutComponents/';
import ModulesStyles from '../dynamicModuleStyles';
import { Container } from './styles';

export default class ApplicationViewer extends React.Component<Props, State>{
    constructor(props: any) {
        super(props);
        this.state = {
            isLoading: true,
            dragElemArray: [],
            layoutArray: ['Traditional', 'Custom', 'Cross Division', 'Grid', 'Flex'],
            prevItem: null,
            currentLayout: "CrossDivision"
        }
    }
    layoutArray: Array<{ key: string; val: string }> = [
        {
            key: 'Traditional',
            val: 'Traditional'
        }, {
            key: 'Custom',
            val: 'Custom'
        }, {
            key: 'CrossDivision',
            val: 'Cross Division'
        }, {
            key: 'Grid',
            val: 'Grid'
        }, {
            key: 'Flex',
            val: 'Flex'
        }
    ]
    renderDrag = (parent: any, index: number): JSX.Element => {
        console.log(parent)
        return (
            <Draggable defaultClassName="draggableItem" key={index} bounds={parent}>
                <div>test</div>
            </Draggable>
        )
    }
    layoutItemClick = (e: any, item: string) => {
        if (this.state.prevItem) {
            this.state.prevItem.style.border = "0px";
        }
        e.target.style.border = "2px red solid";
        this.setState({
            prevItem: e.target,
            currentLayout: item
        })
    }
    layoutItem = (item: any, index: number) => {
        return (
            <div onClick={e => this.layoutItemClick(e, item.key)} className="layoutItemContainer" key={index}>
                {item.val}
            </div>
        )
    }
    layoutPicker = () => {
        let temp = this.layoutArray.concat();
        return temp.map(this.layoutItem)
    }
    componentDidMount() {
        let temp = this.state.dragElemArray.concat();
        temp.push(
            this.renderDrag("parent", 1)
        );
        this.setState({
            dragElemArray: temp
        })
    }
    render() {
        return (
            <Container className="container">
                <div className="layoutPickerArea">
                    <div style={{ width: "5%", textAlign: 'center' }}> {"<"} </div>
                    <div className="layoutPickerScrollContaienr">
                        <div className="layoutPickerScroll" >
                            {this.layoutPicker()}
                        </div>
                    </div>
                    <div style={{ width: "5%", textAlign: 'center' }}> {">"} </div>
                </div>
                {this.state.isLoading ? null :
                    <h1>
                        Application previewer is loading, please wait a second.
                    </h1>
                }
                <div className="draggableMain">
                    <div className="draggable">
                        <LayoutEdit layoutType={this.state.currentLayout} />
                    </div>
                    <div className="modulesInfo">
                        <ModulesStyles />
                    </div>
                </div>
            </Container>
        )
    }
}