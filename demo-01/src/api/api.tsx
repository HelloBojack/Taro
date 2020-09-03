import { post, get } from './https'


// 登录
export const loginByPhone = params => post('/login/cellphone', params)
// 获取首页轮播Banner
export const getIndexBanner = () => get('/banner?type=2')
// 获取推荐歌单
export const getPersonalizedList = () => get('/personalized?limit=10')
// 获取歌单详情
export const getPlaylistDetail = params => get(`/playlist/detail?id=${params}`)

