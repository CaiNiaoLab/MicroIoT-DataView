import React from 'react';
import { State, Props } from './interface';
const styles = require('./styles.css');
export default class ParameterTable extends React.Component<Props, State>{
    constructor(props: any) {
        super(props);
        this.state = {
            deviceID: 1,
            isStyleSetting: true
        }
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.parameterSet}>
                    <div className={styles.buttonGroup}>
                        <button>Simaple</button>
                        <button>Detail</button>
                    </div>
                    {this.state.deviceID ? null :
                        <h1>
                            Select or add a module to start parameter configuration
                        </h1>
                    }
                    {/* <div className={styles.parameterItem}>
                        <label>Height</label>
                        <input placeholder="" />
                    </div>
                    <div className={styles.parameterItem}>
                        <label>Width</label>
                        <input placeholder="" />
                    </div>
                    <div className={styles.parameterItem}>
                        <label>front Color</label>
                        <input placeholder="" />
                    </div>
                    <div className={styles.parameterItem}>
                        <label>Background Color</label>
                        <input placeholder="" />
                    </div>
                    <div className={styles.parameterItem}>
                        <label>front family</label>
                        <input placeholder="" />
                    </div>
                    <div className={styles.parameterItem}>
                        <label>Parent Element</label>
                        <input placeholder="" />
                    </div> */}
                    <div className={styles.parameterItem}>
                        <label>Module Features</label>
                        <input placeholder="" />
                    </div>
                    <div className={styles.parameterItem}>
                        <label>Module Parameter</label>
                        <input placeholder="" />
                    </div>
                    <div className={styles.parameterItem}>
                        <label>Module Topic</label>
                        <input placeholder="" />
                    </div>
                    <div className={styles.parameterItem}>
                        <label>Command Key</label>
                        <input placeholder="" />
                    </div>
                    <div className={styles.parameterItem}>
                        <label>Command Value</label>
                        <input placeholder="" />
                    </div>
                </div>
            </div>
        )
    }
}