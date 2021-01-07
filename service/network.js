export default function request(options) {
  return new Promise((result, resolve) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: result,  // success 只是要求一个回调函数，result 本身就是一个回调函数 所以不用再重新写function
      fail: resolve
    })
  })
}