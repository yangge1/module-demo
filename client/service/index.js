import fetch from './http.js'
export const getList = (data)=>fetch('/api',data);