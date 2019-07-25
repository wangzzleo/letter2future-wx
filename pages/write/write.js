// pages/write/write.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgUrl: "../../images/bg_write2.jpg",
    disabled: true,
    contentHeight: '80%',
    titleVal: '',  //信件标题
    detailVal: '',   //信件内容
  },
  sendLetter: function(){
    if (this.data.flag == 'isWrite'){

    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    console.log(option) //页面跳转带过来的参数
    if (option.flag && option.flag=='isWrite'){
      this.setData({
        flag: option.flag,
        disabled: false,
        contentHeight: '70%'
      })
    }else{

      this.setData({
        flag: option.flag,
        disabled: true,
        contentHeight: '80%',
        titleVal: '给泡芙的信', 
        detailVal: '　我不忘记台州的山水，台州的紫藤花，台州的春日，我也不能忘记S。他从前欢喜喝酒，欢喜骂人；但他是个有天真的人。他待朋友真不错。L从湖南到宁波去找他，不名一文；他陪他喝了半年酒才分手。他去年结了婚。为结婚的事烦恼了几个整年的他，这算是叶落归根了；但他也与我一样，已快上那“中年”的线了吧。结婚后我们见过一次，匆匆的一次。我想，他也和一切人一样，结了婚终于是结了婚的样子了吧。但我老只是记着他那喝醉了酒，很妩媚的骂人的意态；这在他或已懊悔着了。　我不忘记台州的山水，台州的紫藤花，台州的春日，我也不能忘记S。他从前欢喜喝酒，欢喜骂人；但他是个有天真的人。他待朋友真不错。L从湖南到宁波去找他，不名一文；他陪他喝了半年酒才分手。他去年结了婚。为结婚的事烦恼了几个整年的他，这算是叶落归根了；但他也与我一样，已快上那“中年”的线了吧。结婚后我们见过一次，匆匆的一次。我想，他也和一切人一样，结了婚终于是结了婚的样子了吧。但我老只是记着他那喝醉了酒，很妩媚的骂人的意态；这在他或已懊悔着了。'
      })
    }
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