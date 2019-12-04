import React from 'react';
import { State, Props } from '../interface';
import Draggable from 'react-draggable';
import {Container} from './styles/public';
import {Top,Bottom} from './styles/traditional';

export default class Traditional extends React.Component {
    render() {
        return (
            <Container>
                <Top >
                    <h1>System Score</h1>
                </Top>
                <Bottom >
                    <Draggable bounds="parent">
                        <div>Traditional</div>
                    </Draggable>
                </Bottom>
            </Container>
        )
    }
}