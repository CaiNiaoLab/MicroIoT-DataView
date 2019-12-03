import React from 'react';
import { State, Props } from '../interface';
import Draggable from 'react-draggable';
const styles = require('./styles/public.css');
const current = require('./styles/public.css');
export default class Custom extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <Draggable defaultClassName={styles.defaultModules} bounds="parent">
                    <div>Custom</div>
                </Draggable>
            </div>
        )
    }
}