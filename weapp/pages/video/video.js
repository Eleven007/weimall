// pages/video/video.js
var config = require('../../config');
const showToastApi = require('../../components/toast/showToast');//引入消息提醒暴露的接口
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showTc: false,
    hasFocus:false,
  },

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
  
  },
   showClass: function () {
    this.setData({
      showTc: false
    })
  },
  showTeacher: function () {
    this.setData({
      showTc: true
    })
  },
  doFocus:function(){
    //关注逻辑
    let that=this;
    wx.request({
      url: config.service.host + "/focus",//关注api
      success: function (res) {
        showToastApi.showToast({
          title: "关注成功啦~~~",
          duration: 1500
        });
        that.setData({
          hasFocus:true
        })
      },
      fail: function () {
        showToastApi.showToast({
          title: "关注失败啦~~~",
          duration: 1500
        })
      }
    })
  }
})