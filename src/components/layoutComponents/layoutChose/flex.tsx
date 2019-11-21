import React from 'react';
import { State, Props } from '../interface';
import Draggable from 'react-draggable';
const styles = require('./styles/public.css');
const current = require('./styles/public.css');

export default class Flex extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Draggable>
                        <div>Flex</div>
                    </Draggable>
                </div>
            </div>
        )
    }
}