import React from 'react';
import { State, Props } from './interface';
import Draggable from 'react-draggable';
import LayoutEdit from '../layoutComponents/';
import ModulesStyles from '../dynamicModuleStyles';
const styles = require('./styles.css');
export default class ApplicationViewer extends React.Component<Props, State>{
    constructor(props: any) {
        super(props);
        this.state = {
            isLoading: true,
            dragElemArray: [],
            layoutArray: ['Traditional', 'Custom', 'Cross Division', 'Grid', 'Flex', 'test'],
            prevItem: null,
            currentLayout: "crossDivision"
        }
    }
    renderDrag = (parent: any, index: number): JSX.Element => {
        console.log(parent)
        return (
            <Draggable defaultClassName={styles.draggableItem} key={index} bounds={parent}>
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
            <div onClick={e => this.layoutItemClick(e, item)} className={styles.layoutItemContainer} key={index}>
                {item}
            </div>
        )
    }
    layoutPicker = () => {
        let temp = this.state.layoutArray.concat();
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
            <div className={styles.container}>
                <div className={styles.layoutPickerArea}>
                    <div style={{ width: "5%", textAlign: 'center' }}> {"<"} </div>
                    <div className={styles.layoutPickerScrollContaienr}>
                        <div className={styles.layoutPickerScroll} >
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
                <div className={styles.draggableMain}>
                    <div className={styles.draggable}>
                        <LayoutEdit layoutType={this.state.currentLayout} />
                    </div>
                    <div className={styles.modulesInfo}>
                        <ModulesStyles />
                    </div>
                </div>
            </div>
        )
    }
}