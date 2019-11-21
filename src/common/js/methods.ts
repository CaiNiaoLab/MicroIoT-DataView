// localStorag - 存储信息有效期
export function $setlocalStorag(
    name: string,
    value: any,
    timeout: number = 365 * 24 * 60 * 60 * 1000
) {
  let now: number = Date.now()
  timeout = now + timeout
  value = Object.assign(value, {
    'savedate': now,
    'timeout': timeout
  })
  localStorage.setItem(name, JSON.stringify(value))
}
// localStorag - 获取信息有效期
export function $getTimeStore(name: string) {
  let getLocal: any = localStorage.getItem(name)
  let data: any = getLocal ? JSON.parse(getLocal) : {}
  let now: any = Date.now()
  if (data.timeout) {
    return data.timeout < now ? {} : data
  } else {
    return {}
  }
}
// localStorag - 删除信息
export function $deleteStore(name: string) {
  localStorage.removeItem(name)
}
export function $id(id: string) {
  return document.getElementById(id)
}
export function $class(klass: string) {
  return document.getElementsByClassName(klass)
}