const type: string = 'user'
const data: object = {
    name: ''
}
export default function (
    state: object = data,
    action: any
) {
    return action.type !== type ? state : Object.assign({}, state, action.param)
}