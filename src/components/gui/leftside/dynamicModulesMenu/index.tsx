import React from 'react';
import { State, Props } from './interface';
import User from '../userInfo';
import MenuItem from '../dynamicModulesListItem';
import { Container } from './styles';
import { Button } from '@blueprintjs/core';
import { connect } from 'react-redux';
import { stateType, Components,mapTypesToUnecessary } from '../../../../store/actions/actionType';
import { selectComponent } from '../../../../store/actions/operation';

class DynamicModlesMenu extends React.Component<mapTypesToUnecessary<Props>, State> {
    constructor(props: any) {
        super(props);
    }
    componentWillMount() {
        this.setState({
            deviceList: ['cc3200', 'esp8266', 'raspberry']
        })
    }
    renderMenuItem = ():JSX.Element[] | null =>{
        const {components} = this.props;
        return components?components.map((item:Components,index:number)=>{
            return (
                <MenuItem key={index} {...item}/>
            )
        }):null;
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

const mapStateToProps:any = (state:stateType) =>{
    const components:Array<Components> = Object.assign([],state.componentStateManager.components.top,state.componentStateManager.components.bottom);
    return {
        components:components
    }
}

const mapDispatchToProps = {
    selectComponent
}

export default connect<any, any, mapTypesToUnecessary<Props>>(mapStateToProps, mapDispatchToProps)(DynamicModlesMenu);
