import React from 'react';
import { State, Props } from './interface';
// const styles = require('./styles.css');
import { Button, ButtonGroup } from '@blueprintjs/core';
import { Container } from './styles';
import Input from '../../../../publicComponents/form';

export default class DynamicModulesListItem extends React.Component<Props, State>{
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <Container>
                <h4></h4>
                <div className="modulesInfoArea">
                    <div>name:{this.props.moduleName}</div>
                    <div>type:{this.props.moduleType}</div>
                </div>
                <ButtonGroup fill={true}>
                    <Button>Delete</Button>
                    <Button>Edit</Button>
                </ButtonGroup>
            </Container>
        )
    }
}
//docker run -ti -p 15672:15672 -p 15675:15675 -p 15692:15692 -p 1885:1883 -p 8883:8883 -d 7bae1715f543