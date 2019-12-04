import React from 'react';
import { State, Props } from '../interface';
import Draggable from 'react-draggable';
import { store } from '../../../store';
import {Container} from './styles/public';
import {Top,Bottom} from './styles/crossDivision';


export default class CrossDivision extends React.Component {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <Container className="styles.container">
                <Top className="top">
                    <div className="left">
                        <Draggable bounds="parent">
                            <div onClick={e => {
                                console.log('click')
                                return store.dispatch({
                                    type: 'getDefaultStyles',
                                    style: e.target
                                })
                            }}>CrossDivision12</div>
                        </Draggable>
                    </div>
                    <div>
                        <Draggable bounds="parent">
                            <div>CrossDivision2</div>
                        </Draggable>
                    </div>
                </Top>
                <Bottom className="bottom">
                    <div className="left">
                        <Draggable bounds="parent">
                            <div>CrossDivision3</div>
                        </Draggable>
                    </div>
                    <div>
                        <Draggable bounds="parent">
                            <div>CrossDivision4</div>
                        </Draggable>
                    </div>
                </Bottom>
            </Container>
        )
    }
}