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
//docker run -ti -p 15672:15672 -p 15675:15675 -p 15692:15692 -p 1885:1883 -p 8883:8883 -d 7bae1715f543