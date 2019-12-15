import React from 'react';
import { store } from '../store'
import * as CSM from '../store/actions/componentStateManager';

type WapperComponentType = React.ComponentClass;
export default function (WapperComponent: WapperComponentType): WapperComponentType {
    return class II extends WapperComponent {
        componentDidMount() {
            store.dispatch({
                // type: CSM.INIT_STATE,
                payload: this.state
            });
        }
        render() {
            return super.render();
        }
    }
}