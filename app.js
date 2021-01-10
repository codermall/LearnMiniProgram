const TOKEN = 'token'
import {login, tokenAuth} from './service/request'  // 网络请求引入

App({

  /* 保存为全局数据 通过getApp() 可以获取到 */ 
  globalData: {
    token: ''
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    const token = wx.getStorageSync(TOKEN)
    /* 如果本地中取不到这个token 就重新登录 如果取到了，就验证是否过期  */ 
    if(token && token.length > 0) {
      this.check_token(token)
    } else {
      this.login()
    }
  },

  /* 登录 通过wx.login({}) 拿到code 将code发送给我们的服务器 拿到我们的token */ 
  login() {
    wx.login({
      timeout: 3000,
      success: (res) => {
        let code = res.code  // 拿到code后，将这个code发送给我们的服务器
        const params = {code: code}
        login(params).then(res => {
          console.log('生成了token');
          const token = res.data.token
          this.globalData.token = token  // 将这个token 保存到全局中，可以随时取到
          wx.setStorageSync(TOKEN, token)  // 因为小程序在被关闭时 所有的数据将被清除 所以要将这个token保存到本地
        })
      },
      fail: (res) => {
        console.log('登录请求出错', res);
      }
    })
  },

  /* 验证token 是否过期 */ 
  check_token(token) {
    tokenAuth({token: token}).then(res => {
      console.log('执行了验证token', res);
      if(!res.data.errCode) {
        this.globalData.token = token  // 因为重新打开了页面 之前保存的那个token被清除了 这里重新赋值
        console.log('token有效', this.globalData.token);
      } else {
        this.login()  // 重新获取token
      }
    })
  }
})
