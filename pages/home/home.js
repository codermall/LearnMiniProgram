// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0,
    tabIndex: 0,
  },

  handleIncrement(event) {
    console.log(event);
    this.setData({
      counter: this.data.counter + 1
    })
  },

  /* tab 发射过来的事件 */ 
  toggleTab(event) {
    console.log(event);
    // 处理数据
    this.setData({
      tabIndex: event.detail.index
    })
  },

  handleCpnIncrement() {
    const myCpn = this.selectComponent('#sel-id')
    myCpn.increment(10)
  }
})