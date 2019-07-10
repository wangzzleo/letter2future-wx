//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    banner_01: "../../images/banner1.png"
  },
  //事件处理函数
  onChange(event) {
    console.log(event.detail.index)
  },
  onLoad: function () {
    console.log(app.globalData.userInfo)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     console.log(res)
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    } else {
      wx.navigateTo({
        url: '../about/about'
      });
      // 在没有 open-type=getUserInfo 版本的兼容处理
        // Dialog.confirm({
        //   title: '提示',
        //   message: '需要获取您的微信昵称和头像',
        //   confirmButtonText: '允许',
        //   cancelButtonText: '取消'
        // }).then(() => {
        //   // on confirm
          
        //   // wx.getUserInfo({
        //   //   success: res => {
        //   //     app.globalData.userInfo = res.userInfo
        //   //     this.setData({
        //   //       userInfo: res.userInfo,
        //   //       hasUserInfo: true
        //   //     })
        //   //   }
        //   // })
        // }).catch(() => {
        //   // on cancel
        //   Dialog.close();
        // });
     
    }
  },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
