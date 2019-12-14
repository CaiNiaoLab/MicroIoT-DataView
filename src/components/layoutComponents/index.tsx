import React from 'react';
import { State, Props } from './interface';
import ImportHOC from '../highOrderComponents/importComponents';
import { Container } from './styles';
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
        CurrentLayout = ImportHOC((await import('./layoutChose/' + flag)).default)
        this.setState({
            currentLayout: <CurrentLayout />
        })
    }
    render() {
        return (
            <Container>
                <header className="globalHeader">IOT open platform</header>
                <div style={{ height: "90%", width: "100%", boxSizing: 'border-box' }}>
                    {this.state.currentLayout}
                </div>
            </Container>
        )
    }
}
