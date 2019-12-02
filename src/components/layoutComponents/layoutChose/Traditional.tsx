import React from 'react';
import { State, Props } from '../interface';
import Draggable from 'react-draggable';
const styles = require('./styles/public.css');
const current = require('./styles/traditional.css');

export default class Traditional extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={current.top}>
                    <h1>System Score</h1>
                </div>
                <div className={current.bottom}>
                    <Draggable bounds="parent">
                        <div>Traditional</div>
                    </Draggable>
                </div>
            </div>
        )
    }
}