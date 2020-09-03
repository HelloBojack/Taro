import { post, get } from './https'


export const getIndexBanner = () => get('/banner?type=2')
export const getPersonalizedList = () => get('/personalized?limit=10')
