const type: string = 'vReactView'
const data: object = {
    uuid: ''
}
export default function (
    state: object = data,
    action: any
) {
    return action.type !== type ? state : Object.assign({}, state, action.param)
}