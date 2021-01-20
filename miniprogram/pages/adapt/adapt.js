// pages/adapt/adapt.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  copyTBL: function (e) {
    var self = this;
    wx.setClipboardData({
      data: '北大猫协',//需要复制的内容
      success: function (res) {
        // self.setData({copyTip:true}),
       
      }
    })
    },
  downloadFile: function(e){
    wx.cloud.downloadFile({
      fileID: 'cloud://sducats-9g72exszb305a71a.7364-sducats-9g72exszb305a71a-1304138247/协议书-山东大学学生动物保护协会猫咪领养协议书.docx', 
      success :(res)=>{
        console.log('click: ', res)
        wx.openDocument({
          filePath: res.tempFilePath,
          title:"猫咪领养协议",
          showMenu: true,
          success: (res)=> {
            console.log('openDocument: ', res)
          }
        })  
        // wx.saveFile({
        //   tempFilePath: res.tempFilePath,
        //   success: function (res) {
        //     wx.showModal({
        //       title: '保存成功',
        //       content: '保存路径为:'+res.savedFilePath,
        //       showCancel: false
        //     })
        //   console.log('saveFilePath: ', res.savedFilePath)
        //   }
        // })
      }
    })
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