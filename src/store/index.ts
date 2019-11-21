/* index.ts */
import { combineReducers } from 'redux'
import { createStore } from 'redux'

import { $setlocalStorag } from '../common/js/methods'

const PATH = (path: string) => (require(path + '.ts').default)

window._STORE = createStore(combineReducers({ // 中转合并
    user: PATH('./modules/user'),
}))
window._STORE.subscribe(() => { // 数据变动则自动存储localStorag
    let state = window._STORE.getState()
    Object.keys(state).map(key => $setlocalStorag(key, state[key]))
})