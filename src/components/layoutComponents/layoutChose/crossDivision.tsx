import React from 'react';
import { State, Props } from '../interface';
import Draggable from 'react-draggable';
import { store } from '../../../store';
const styles = require('./styles/public.css');
const current = require('./styles/crossDivision.css');

export default class CrossDivision extends React.Component {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={current.top}>
                    <div className={current.left}>
                        <Draggable bounds="parent">
                            <div onClick={e => {
                                console.log('click')
                                return store.dispatch({
                                type: 'getDefaultStyles',
                                style: e.target
                            })}}>CrossDivision1</div>
                        </Draggable>
                    </div>
                    <div>
                        <Draggable bounds="parent">
                            <div>CrossDivision2</div>
                        </Draggable>
                    </div>
                </div>
                <div className={current.bottom}>
                    <div className={current.left}>
                        <Draggable bounds="parent">
                            <div>CrossDivision3</div>
                        </Draggable>
                    </div>
                    <div>
                        <Draggable bounds="parent">
                            <div>CrossDivision4</div>
                        </Draggable>
                    </div>
                </div>
            </div>
        )
    }
}