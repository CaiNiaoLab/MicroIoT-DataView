import React from 'react';
import { State, Props } from './interface';
import User from '../userInfo';
import MenuItem from '../dynamicModulesListItem';
import { Container } from './styles';
import { Button } from '@blueprintjs/core';
import { connect } from 'react-redux';
import {  Components,mapTypesToUnecessary } from '../../../../store/actions/actionType';
import { selectComponent } from '../../../../store/actions/operation';
import {Map,List} from 'immutable';

class DynamicModlesMenu extends React.Component<mapTypesToUnecessary<Props>, State> {
    componentWillMount() {
        this.setState({
            deviceList: ['cc3200', 'esp8266', 'raspberry']
        })
    }
    renderMenuItem = () =>{
        const {components} = this.props;
        return components?.map((item:any,index:number)=>{
            return <MenuItem key={index} componentId={item.get("componentId")}/>
        })
    }
    render() {
        return (
            <Container >
                <User />
                <div style={{ borderBottom: '1px solid rgba(34,34,34,.25)' }}>
                    <label>
                        Device Type Chose:
                    </label>
                    <select className="typeChose" onChange={e => this.setState({
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
                    <div className="componentListTitle">
                        <p>
                        Dynamic Modules List :
    
                        </p>
                        <Button>add</Button>
                    </div>
                    {this.renderMenuItem()}
                </div>
            </Container>
        )
    }
}

const mapStateToProps:any = (state:any) =>{

    const manager = state.componentStateManager;

    // const components:Array<Components> = Object.assign([],state.componentStateManager.components.top,state.componentStateManager.components.bottom);
    const components:List<Components> = manager.getIn(["componentStateManager","components"]);
    return {
        components:components
    }
}

const mapDispatchToProps = {
    selectComponent
}

export default connect<any, any, mapTypesToUnecessary<Props>>(mapStateToProps, mapDispatchToProps)(DynamicModlesMenu);
