import Taro from '@tarojs/taro'

let base: string = ''
if (process.env.NODE_ENV === 'development') {
  base = 'http://localhost:3000'
}
function baseOptions(params, method = 'GET') {
  let { url, data } = params
  let contentType = 'application/x-www-form-urlencoded'
  contentType = params.contentType || contentType
  const option = {
    isShowLoading: false,
    url: base + url,
    data: data,
    method: method,
    // header: { 'content-type': contentType, 'token': token }, // 默认contentType ,预留token
    header: { 'content-type': contentType }, // 默认contentType 
    success(res) {
    },
    error(e) {
      // logError('api', '请求接口出现问题', e)
    }
  }
  return Taro.request(option)
}
export function get(url: string, data = '') {
  let option = { url, data }
  return baseOptions(option)
}
export function post(url: string, data: any) {
  let params = { url, data }
  return baseOptions(params, 'POST')
}