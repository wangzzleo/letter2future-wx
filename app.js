//app.js
App({
  onLaunch: function () {
    //生命周期回调——监听小程序初始化，全局只触发一次。

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        
      }
    })
  },
  onShow:function(){
    //生命周期回调——监听小程序启动或切前台。
  },
  onHide:function(){
    //生命周期回调——监听小程序切后台
  },
  onError:function() {
    //错误监听函数。
  },
  globalData: {
    userInfo: null
  }
})