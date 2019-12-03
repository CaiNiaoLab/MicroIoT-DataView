export function getStylesChange(state:any){
    return {
        type:'getStylesChange',
        styles:state.styles
    }
}
export function getDefaultStyles(state:any){
    return {
        type:'getDefaultStyles',
        styles:state.styles
    }
}