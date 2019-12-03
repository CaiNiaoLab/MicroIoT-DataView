import React from 'react';
import { State, Props } from './interface';
// import Draggable from 'react-draggable'
// import Traditional from './layoutChose/traditional'
// import CrossDivision from './layoutChose/crossDivision'
// import Grid from './layoutChose/grid'
// import Flex from './layoutChose/flex'
// import Custom from './layoutChose/custom'
import ImportHOC from '../highOrderComponents/importComponents';
export default class LayoutComponents extends React.Component<Props, State>{
    constructor(props: any) {
        super(props);
        this.state = {
            currentLayout: "not chose",
            currentType: ''
        }
    }
    componentDidUpdate(prevProps: any, prevState: any) {
        if (prevState.currentType !== this.props.layoutType) {
            this.layoutChosen();
            this.setState({
                currentType: this.props.layoutType
            })
        }
    }
    layoutChosen = async () => {
        let flag = this.props.layoutType,
            CurrentLayout: React.ComponentClass;
        // flag = flag.toLowerCase().replace(" ", "");
        console.log(flag);

        // switch (flag) {
        //     case 'crossdivision':
        //         this.setState({ currentLayout: <CrossDivision /> });
        //         return;
        //     case 'traditional':
        //         this.setState({ currentLayout: <Traditional /> });
        //         return;
        //     case 'custom':
        //         this.setState({currentLayout: <Custom/>});
        //         return;
        //     default:
        //         return this.setState({ currentLayout: "not chose" });
        // }
        CurrentLayout = ImportHOC((await import('./layoutChose/' + flag)).default)
        this.setState({
            currentLayout: <CurrentLayout />
        })
    }
    render() {
        return (
            <div style={{
                height: "100%", width: "100%", boxSizing: 'border-box',
                border: '20px solid #000',
                borderLeft: '10px solid #000',
                borderRight: '10px solid #000',
                borderRadius: '15px',
                background: '#fff'
            }}>
                <header style={{
                    height: "10%",
                    width: "100%",
                    boxSizing: 'border-box',
                    borderBottom: '1px solid #22222222',
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: '10px'
                }}>IOT open platform</header>
                <div style={{ height: "90%", width: "100%", boxSizing: 'border-box' }}>
                    {this.state.currentLayout}
                </div>
            </div>
        )
    }
}
