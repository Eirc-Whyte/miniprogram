//index.js

Page({
  data: {
    screenWidth: 0,
    screenHeight: 0,
    imgwidth: 0,
    imgheight: 0,
    imgalist: ['https://course.pku.edu.cn/bbcswebdav/users/1600011084/猫协小程序图片/donate.jpeg',
    ],
    list:[

    ],
  },
  onLoad:function(){
    let util = require("../../utils/util.js")
    const db = wx.cloud.database()
    db.collection("Donors").get().then(res=>{
      this.setData({
        list:res.data.map((item)=>{
          item.time = util.formatTime(item.time,"YY-MM-DD")
          return item
        }),//util.formatTime(res.data[0].time,"YY-MM-DD"),
      })
      console.log(res.data[0].time)
    })
  },
  //转发功能
  onShareAppMessage: function () {
    let users = wx.getStorageSync('user');
    if (res.from === 'button') { }
    return {
      success: function (res) { }
    }
  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  copyTBL: function (e) {
  var self = this;
  wx.setClipboardData({
    data: '1022750861',//需要复制的内容
    success: function (res) {
      // wx.getClipboardData({
      //   success (res) {
      //     console.log(res.data) // data
      //   }
      // })
    }
  })
  },

  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: this.data.imgalist // 需要预览的图片http链接列表
    })
  }
})



