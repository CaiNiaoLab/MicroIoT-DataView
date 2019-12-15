import React from 'react';
import { State, Props } from '../interface';
import Draggable from 'react-draggable';
import {Container} from './styles/public';

export default class Flex extends React.Component {
    render() {
        return (
            <Container>
                <div>
                    <Draggable>
                        <div>Flex</div>
                    </Draggable>
                </div>
            </Container>
        )
    }
}