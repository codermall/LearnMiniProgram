// pages/home/home.js
import request from '../../service/network'
Page({

  // 网络请求
  onLoad() {
    wx.request({
      url: 'http://httpbin.org/post',
      method: 'post',
      data: {
        name: 'mal',
        age: 18
      },
      success: function(res) {
        console.log('请求结果', res);
      }
    })

    request({
      url: 'http://httpbin.org/post',
      method: 'post',
      data: {
        name: 'mal',
        age: 18
      }
    }).then(res => {
      console.log(123, res);
    })
  }
})