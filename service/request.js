import request from './network'

export function testRequest(params) {
  return request({
    url: 'http://httpbin.org/post',
    method: 'post',
    data: params,
  })
}

export  function login(params) {
  return request({
    url: 'http://123.207.32.32:3000/login',
    method: 'post',
    data: params
  })
}

export  function tokenAuth(params) {
  return request({
    url: 'http://123.207.32.32:3000/auth',
    method: 'post',
    header: params
  })
}