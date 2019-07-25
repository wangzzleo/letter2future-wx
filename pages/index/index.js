//index.js
//获取应用实例
const app = getApp()


Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    banner_01: "../../images/banner1.png",
    selectedTab: 0,
    top: '85%',
    left: '80%',
    moonList: [
     {
        name: '你不知道的事',
        userName: '云凡',
        date: '2019-02-21'
     },
      {
        name: '暴风雨来临前',
        userName: '断桥残雪',
        date: '2019-02-21'
      },
      {
        name: '隐形的翅膀',
        userName: '张韶涵',
        date: '2019-02-21'
      },
      {
        name: '暴风雨来临前',
        userName: '断桥残雪',
        date: '2019-02-21'
      },
      {
        name: '隐形的翅膀',
        userName: '张韶涵',
        date: '2019-02-21'
      }
    ],
    weekList: [
      {
        name: '周榜第一封信',
        userName: '梨花雨',
        date: '2019-02-21'
      },
      {
        name: '这是第二封',
        userName: '蓝色港湾',
        date: '2019-02-21'
      },
      {
        name: '你笑起来真好看',
        userName: 'sunshine',
        date: '2019-02-21'
      }
    ],
    markers: [
      {
        iconPath: "../../images/location2.png",
        id: 0,
        latitude: 23.099994,
        longitude: 113.324520,
        width: 30,
        height: 30,
        alpha: '0.4',
        label: {
          content: '12',
          color: '#fff',
          fontSize: 12,
          // bgColor: '#000',
          display: 'ALWAYS',
          anchorX: '-8',
          anchorY: '-25',
          textAlign: 'center'
        }
      },
      {
        iconPath: "../../images/location2.png",
        id: 0,
        latitude: 30.67,
        longitude: 104.07,
        width: 30,
        height: 30,
        alpha: '0.4',
        label: {
          content: '25',
          color: '#fff',
          fontSize: 12,
          // bgColor: '#000',
          display: 'ALWAYS',
          anchorX: '-8',
          anchorY: '-25',
          textAlign: 'center'
        }
      },
      {
        iconPath: "../../images/location2.png",
        id: 0,
        latitude: 37.87,
        longitude: 112.55,
        width: 30,
        height: 30,
        alpha: '0.4',
        label: {
          content: '8',
          color: '#fff',
          fontSize: 12,
          // bgColor: '#000',
          display: 'ALWAYS',
          anchorX: '-6',
          anchorY: '-25',
          textAlign: 'center'
        }
      }
    ],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '../../images/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  readLetter: function(){
    console.log('看信==')
    wx.navigateTo({
      url: '../write/write'
    });
  },
  goStatistics: function () {
    wx.navigateTo({
      url: '../statistics/statistics'
    });
  },
  markertap(){

  },
  regionchange(){

  },
  onChange(event) {
    console.log(event.detail.index)
  },
  onLoad: function () {
    console.log(app.globalData.userInfo)
    // wx.login({
    //   success(res) {
    //     if (res.code) {
    //       console.log(res)
    //       //发起网络请求
    //       // wx.request({
    //       //   url: 'https://test.com/onLogin',
    //       //   data: {
    //       //     code: res.code
    //       //   }
    //       // })
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // })
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
  // writeChange(event){
  //   console.log(event)
  // },
  moveEvent(e){
    console.log(e);
    console.log(e.detail.top)
    // this.setData({
    //   top: e.detail.top,
    //   left: e.detal.left
    // })
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
