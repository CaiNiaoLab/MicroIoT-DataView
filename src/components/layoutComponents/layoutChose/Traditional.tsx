import React from 'react';
import { Props } from './interface/traditional';
import Dragger from '../../../publicComponents/Dragger';
import { Container } from './styles/public';
import { Top, Bottom } from './styles/traditional';
import withLayout from '../../../highOrderComponents/withLayout'

class Traditional extends React.Component<Props, any>{

    handleCanvasPartClick = (canvasPart: string) => {
        const { changeComponentBound } = this.props;
        changeComponentBound({ canvasPart: canvasPart });
    }
    topBounds = {
        x: 0,
        y: 0
    }
    bottomBounds = {
        x: 0,
        y: 0
    }
    componentDidMount() {
        const topBounds = this.topRef.current as HTMLDivElement;
        const bottomBounds = this.topRef.current as HTMLDivElement;
        this.bottomBounds = {
            x: bottomBounds.getBoundingClientRect().left,
            y: bottomBounds.getBoundingClientRect().top
        }
        this.topBounds = {
            x: topBounds.getBoundingClientRect().left,
            y: topBounds.getBoundingClientRect().top
        }
    }
    topRef: React.RefObject<HTMLDivElement> = React.createRef()
    bottomRef: React.RefObject<HTMLDivElement> = React.createRef()
    render() {
        return (
            <Container>
                <Top ref={this.topRef} onClick={() => this.handleCanvasPartClick('top')}>
                    <h1>System Score</h1>
                </Top>
                <Bottom ref={this.bottomRef} onClick={() => this.handleCanvasPartClick('bottom')}>
                    <Dragger bounds={this.bottomBounds}>
                        <div>Traditional</div>
                    </Dragger>
                </Bottom>
            </Container>
        )
    }
}

export default withLayout(Traditional);
