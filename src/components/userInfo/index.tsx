import React from 'react';
import { State, Props } from './interface';
const styles = require('./styles.css')
export default class UserInfo extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state={
            headUrl:'http://112.74.165.209:3000/images/third.png',
            userID:1,
            account:'792634614@qq.com',
            username:'Ashes Born'
        }
    }
    render() {
        return (
            <div className={styles.container}>
                <div style={{ flex: 1 }}>
                    <img className={styles.image} src={this.state.headUrl} />
                </div>
                <div style={{ flex: 3,display:'flex',flexDirection:'column' }}>
                    <div style={{fontSize:'28px'}} className={styles.userInfo}>{this.state.username} </div>
                    <div style={{color:'#999'}} className={styles.userInfo}>{this.state.account}</div>
                </div>
            </div>
        )
    }
}