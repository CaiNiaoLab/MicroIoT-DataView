import { notification } from 'antd'
//import { GET, POST } from 'common/js/fetch-ajax.ts' // 可对库进行抉择

// const FAKE = false // true:假数据 false:真数据

// const URL: string = 'http://192.168.0.103' // 测试服务器
// const URL: string = location.protocol + '//' + location.host + '/api' // 用于反代
const URL: string = 'http://XXX.XXX.XXX.XXX' // 正式服务器

const CODE_OK: number = 0
const CODE_ERR = (r: any, type?: boolean) => { // 失败的回调
    notification[type ? 'warning' : 'error']({
        message: 'Notification Title',
        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    })
    console.error(r)
}
const CODE_IS = (r: any, fn: any) => (r.status === CODE_OK ? fn(r) : CODE_ERR(r, true))