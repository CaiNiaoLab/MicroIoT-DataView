import React from 'react';
import { State, Props } from './interface';
export default class Selector extends React.Component<Props,State>{
    constructor(props: any) {
        super(props);
    }
    render(){
        return(
            <div style={{
                height:"100%",
                width:"100%",
                boxSizing:"border-box",
                display:"flex",
                alignItems:"center"
            }}>
                <select className={this.props.className} onChange={e=>this.props.getValue(e.target.value)}>
                    {this.props.data.map((item,index)=>(
                        <option key={index} value={item.key}>{item.value}</option>
                    ))}
                </select>
            </div>
        )
    }
}