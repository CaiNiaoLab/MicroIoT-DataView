import React from 'react';
import { State, Props } from '../interface';
import Draggable from 'react-draggable';
import {Container} from './styles/public';
// const styles = require('./styles/public.css');
// const current = require('./styles/public.css');

export default class Grid extends React.Component {
    render() {
        return (
            <Container>
                <div>
                    <div>
                        <Draggable>
                            <div>Grid1</div>
                        </Draggable>
                    </div>
                    <div>
                        <Draggable>
                            <div>Grid2</div>
                        </Draggable>
                    </div>
                </div>
                <div>
                    <div>
                        <Draggable>
                            <div>Grid3</div>
                        </Draggable>
                    </div>
                    <div>
                        <Draggable>
                            <div>Grid4</div>
                        </Draggable>
                    </div>
                </div>
            </Container>
        )
    }
}