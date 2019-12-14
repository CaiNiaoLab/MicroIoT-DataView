import React from 'react';
import DMM from './gui/leftside/dynamicModulesMenu'
import PreviewArea from './previewArea';
export interface Props {

}
interface State {
    isOld: boolean
}
export default class Hello extends React.Component<Props, object>{
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div style={{
                display: 'flex',
                height: '100vh',
                width: '100vw',
                boxSizing: 'border-box',
                // overflow:'hidden'
            }}>
                <DMM />
                <PreviewArea />
            </div>
        )
    }
}