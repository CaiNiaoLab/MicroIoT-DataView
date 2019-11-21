import React from 'react';
import { State, Props } from './interface';
import User from '../userInfo';
import Item from '../dynamicModulesListItem';
const styles = require('./styles.css');
export default class DynamicModlesMenu extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
    }
    componentWillMount() {
        this.setState({
            deviceList: ['cc3200', 'esp8266', 'raspberry']
        })
    }
    render() {
        return (
            <div className={styles.container}>
                <User />
                <div style={{borderBottom:'1px solid rgba(34,34,34,.25)'}}>
                    <label>
                        Device Type Chose:
                    </label>
                    <select className={styles.typeChose} onChange={e => this.setState({
                        deviceType: e.target.value
                    })}>
                        {this.state.deviceList.map((item, index) => {
                            return (
                                <option value={item} key={index}>{item}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    Dynamic Modules List :
                    <Item prset={this.state.prset}/>
                </div>
            </div>
        )
    }
}
