// pages/about/about.js
import Dialog from 'vant-weapp/dialog/dialog';
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: '见过一些人，他们朝九晚五，有时也要加班，却能把生活过得很有趣。他们有自己的爱好，不怕独处。我佩服每个能在平静生活中过出趣味的人。这世上没有无所事事的人生，只有无所事事的人生态度。',
    show: false
  },
  onGotUserInfo(e){
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    wx.navigateBack({
      delta: 1
    })
  },
  
  
  // getUserInfo: function (e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})