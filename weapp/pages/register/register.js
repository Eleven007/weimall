// pages/register/register.js
var config = require('../../config');
const showToastApi = require('../../components/toast/showToast');//引入消息提醒暴露的接口
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:['范围1','范围2','范围3'],
    index:"",
    teacherName:"",
    teacherTel:"",
    range:"",
    intro:"",
    introImg:"",
    detailImg:[],
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
  nameChange: function (e) {
    var val = e.detail.value;
    this.setData({
      teacherName: val
    })
  },
  telChange: function (e) {
    var val = e.detail.value;
    this.setData({
      teacherTel: val
    })
  },
  introChange: function (e) {
    var val = e.detail.value;
    this.setData({
      intro: val
    })
  },
  bindPickerChange: function (e) {
    let range = this.data.array[e.detail.value]
    this.setData({
      index: e.detail.value,
      range: range
    })
  },
  uploadIntro:function(){
    wx.chooseImage({
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths);
        wx.uploadFile({
          url: config.service.uploadUrl, //接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success: function (res) {
            var data = res.data
            //do something
          }
        })
      }
    })
  },
  uploadDetail: function () {
    wx.chooseImage({
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths);
        wx.uploadFile({
          url: config.service.uploadUrl, //接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success: function (res) {
            var data = res.data
            //do something
          }
        })
      }
    })
  },
  submitForm:function(){
    var name = this.data.teacherName;
    var tel = this.data.teacherTel;
    var range = this.data.range;
    var r = /^((0\d{2,3}-\d{7,8})|(1\d{10}))$/;
    if (name == "") {
      showToastApi.showToast({
        title: "请输入姓名",
        duration: 1500
      })
      return false;
    }
    if (tel == "") {
      showToastApi.showToast({
        title: "请输入联系电话",
        duration: 1500
      })
      return false;
    }
    if (!r.test(tel)) {
      showToastApi.showToast({
        title: "请输入正确的联系电话",
        duration: 1500
      })
      return false;
    }
    if (range == "") {
      showToastApi.showToast({
        title: "请选择授课范围",
        duration: 1500
      })
      return false;
    }
    wx.request({
      url: config.service.host+"/save",//拼接数据
      success: function (res) {
        showToastApi.showToast({
          title: "提交成功",
          duration: 1500
        })
      },
      fail:function(){
        showToastApi.showToast({
          title: "提交失败",
          duration: 1500
        })
      }
    })
  }
})