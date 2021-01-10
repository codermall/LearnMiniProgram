// pages/home/home.js

import {testRequest, login} from '../../service/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const params = {
      name: 'mal',
      age: 18
    };
    testRequest(params).then(res => {
      console.log(123, res);
    })
  },

  
})