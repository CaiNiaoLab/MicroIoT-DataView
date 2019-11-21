/* 调用模块 */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { register } from './registerServiceWorker'

/* 全局挂载 */
//import './common/js/adaption' // rem 自适应
import './store/index' // redux window._STORE
//import './api/config' // ajax window.API

/* 全局样式 */
import 'antd/lib/notification/style/css'
import 'antd/lib/input/style/css'
import './common/style/index.less' // 自定义全局样式
/* 业务组件唯一入口 */
import { VReactView } from './components/index'
import { Provider } from 'react-redux'

declare global { // 定义暴露全局的属性
  interface Window {
    API: any,
    _STORE: any
  }
}
/* 渲染 */
ReactDOM.render(
  <Provider store={window._STORE}>
    <BrowserRouter>
      <Route path="/" component={VReactView} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('rootDiv') as HTMLElement
);
register(null)

interface RootProps {

}

interface RootState {

}