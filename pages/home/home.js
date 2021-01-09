// pages/home/home.js
Page({
  handleToast() {
    wx.showToast({
      title: '成功',
      mask: true,
      duration: 3000
    })
  },

  handleModal() {
    wx.showModal({
      cancelColor: 'cancelColor',
      title: '提示的标题',
      content: '提示的内容',
      success(res) {
        if(res.confirm) {
          console.log('点击了确定按钮');
        } else if(res.cancel) {
          console.log('点击了取消按钮');
        }
      }
    })
  },

  handleLoading() {
    wx.showLoading({
      title: '加载ing',
      mask: true
    })

    setTimeout(() => {
      wx.hideLoading()
    }, 3000)
  },

  handleActionSheet() {
    wx.showActionSheet({
      itemList: ['a', 'b', 'c'],
      success(res) {
        console.log(res.tapIndex, res);
      },
      fail(res) {
        console.log(res.errMsg);
      }
    })
  },

  onShareAppMessage(options) {
    return {
      title: '分享标题 title',
      path: '/pages/home/home',
      imageUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F1113%2F041620103S8%2F200416103S8-4-1200.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612777312&t=4bc3c2665f5eadedec7cc834f5b47cb3'
    }
  }
})