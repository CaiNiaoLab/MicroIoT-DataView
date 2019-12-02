import React from 'react';
import { State, Props } from './interface';
const styles = require('./styles.css');
export default class DynamicModulesListItem extends React.Component <Props,State>{
    constructor(props: any) {
        super(props);
    }
    componentWillMount(){
        this.setState({
            moduleName:'undfined',
            moduleType:'undfined type'
        })
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.modulesInfoArea}>
                    <div>name:{this.state.moduleName}</div>
                    <div>type:{this.state.moduleType}</div>
                </div>
                <div className={styles.buttonGrop}>
                    <button>Delete</button>
                    <button>Edit</button>
                </div>
            </div>
        )
    }
}