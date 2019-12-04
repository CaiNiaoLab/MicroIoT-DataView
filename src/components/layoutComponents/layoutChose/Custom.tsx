import React from 'react';
import { State, Props } from '../interface';
import Draggable from 'react-draggable';
import {Container} from './styles/public';
// const styles = require('./styles/public.css');
// const current = require('./styles/public.css');
export default class Custom extends React.Component {
    render() {
        return (
            <Container >
                <Draggable defaultClassName="defaultModules" bounds="parent">
                    <div>Custom</div>
                </Draggable>
            </Container>
        )
    }
}