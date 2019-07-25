const app = getApp();
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    top: {
      type: String,
      value: '85%',
    },
    left: {
      type: String,
      value: '80%',
    }
  },
  data: {
    // 这里是一些组件内部数据
    top: '85%',
    left: '80%',
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
      var res = wx.getSystemInfoSync();
      this.setData({
        systemInfo: res,
      })
    },
    moved: function () { },
    detached: function () { },
  },

  methods: {
    // 这里是一个自定义方法
    //拖动不超过规定范围
    /**
     * 计算拖动的位置
     */
    setTouchMove: function (e) {
      var top = e.touches[0].clientY;
      var left = e.touches[0].clientX;
      // console.log('top:', top);
      // console.log('left:', left);
      var systemInfo = this.data.systemInfo;
      var maxTop = systemInfo.windowHeight * 0.905;
      var maxLeft = systemInfo.windowWidth * 0.86;
      // console.log('maxTop===', maxTop);
      // console.log('maxLeft===', maxLeft);
      if (top < 45) {
        top = 45;
      }
      if (top > maxTop) {
        top = maxTop;
      }
      if (left < 0) {
        left = 0;
      }
      if (left > maxLeft) {
        left = maxLeft;
      }
      this.setData( {
        top: top + "px",
        left: left + "px"
      });
    },
    setCoordinates: function () {
      // var left = Number(this.data.left.replace("px", ""));
      // if (left > (this.data.systemInfo.windowWidth / 2)) {
      //   left = this.data.systemInfo.windowWidth * 0.8;
      // } else {
      //   left = 0;
      // }
      // this.setData({
      //   top: this.data.top,
      //   left: left + "px",
      // });
    },
    /**
     * 写信
     */
    writeEmial: function () {
      console.log('点击悬浮框====');
      wx.navigateTo({
        url: '../write/write?flag=isWrite'
      });
      // wx.showLoading();
      // wx.request({
      //   url: app.globalData.resUrl + 'param/get', //仅为示例，并非真实的接口地址
      //   data: {
      //     paramKey: 'index_notice'
      //   },
      //   header: {
      //     'content-type': 'application/json' // 默认值
      //   },
      //   success(res) {
      //     wx.hideLoading();
      //     console.log(res.data)
      //   }
      // })
      // wx.makePhoneCall({
      //   phoneNumber: "043184863311",
      //   success: function () {
      //     console.log("拨打电话成功")
      //   }
      // })
    }
  }
})