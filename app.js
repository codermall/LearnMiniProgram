App({
  onLaunch() {
    /* 页面初始化时执行 */ 
    console.log();
  },

  onShow(){
    /* 界面显示时执行 */
    wx.getUserInfo({
      success: function(option) {
        console.log(option)
      },
    })
  },

  onHide() {
    /* 界面在隐藏时执行 */
  },

  onError() {
    /* 当出错时执行 */
  },

  globleInfo: {
    name: 'mal',
    age: 22
  }
})