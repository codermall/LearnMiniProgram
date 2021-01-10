// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: 'Hellow World！'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handleCode() {
    wx.navigateTo({
      url: '/pages/detail/detail?id=1',
      success: function(res) {
        console.log('按钮点击触发的跳转成功', res);
      }
    })
  }
})