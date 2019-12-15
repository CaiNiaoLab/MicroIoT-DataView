import React from 'react';
import { State, Props } from './interface';
// const styles = require('./styles.css');
import { Button, ButtonGroup } from '@blueprintjs/core';
import { Container } from './styles';
import { stateType, Components, mapTypesToUnecessary } from '../../../../store/actions/actionType';
import { selectComponent } from '../../../../store/actions/operation';
// import Input from '../../../../publicComponents/form';
import { connect } from 'react-redux';

class DynamicModulesListItem extends React.Component<mapTypesToUnecessary<Props>, State>{
    constructor(props: any) {
        super(props);
    }
    handlerClick = () =>{
        const {componentId,selectComponent} = this.props;
        if(selectComponent){
            selectComponent((componentId || ""));
        }
    }
    render() {
        return (
            <Container>
                <h4></h4>
                <div className="modulesInfoArea">
                    <div>name:{this.props.componentName}</div>
                    <div>type:{this.props.componentTitle}</div>
                    <div>ID:{this.props.componentId}</div>
                </div>
                <ButtonGroup fill={true}>
                    <Button>Delete</Button>
                    <Button>Edit</Button>
                </ButtonGroup>
            </Container>
        )
    }
}

const mapDispatchToProps ={
    selectComponent
}
export default connect(null,mapDispatchToProps)(DynamicModulesListItem);
//docker run -ti -p 15672:15672 -p 15675:15675 -p 15692:15692 -p 1885:1883 -p 8883:8883 -d 7bae1715f543