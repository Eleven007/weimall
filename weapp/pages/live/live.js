// pages/live/live.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:[{
      type:1,
      msg:'大家好',
      userName:'王谢'
    }, {
      type: 2,
      msg: '老师好',
      userName: '逍遥'
      }, {
        type: 2,
        msg: '老师好',
        userName: '逍遥1'
    },{
      type: 2,
      msg: '老师好',
      userName: '逍遥2'
    },],
    newMsg:'',
    showTc:false,
    isCancel:false,
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
  inputChange:function(e){
    this.setData({
      newMsg: e.detail.value
    })
  },
  sendMsg:function(){
    if (this.data.newMsg){
      let msgArr = this.data.message;
      let msg = {
        type: 2,
        userName: '新人',
        msg: this.data.newMsg
      }
      msgArr.push(msg);
      this.setData({
        message: msgArr,
        newMsg:""
      })
    }
  },
  showClass:function(){
    this.setData({
      showTc: false
    })
  },
  showTeacher:function(){
    this.setData({
      showTc: true
    })
  },
  startRecord:function(){
    let that=this;
    wx.startRecord({
      success: function (res) {
        var tempFilePath = res.tempFilePath
        if(that.data.isCancel){
          console.log("取消了录音")
        }else{
          console.log("音频地址："+tempFilePath);
        }
      },
      fail: function (res) {
        //录音失败
      }
    })
  },
  stopRecord:function(){
    this.setData({
      showCancel: false,
    })
    wx.stopRecord();
  },
  moveEvent: function (event){
    let currentX = event.touches[0].pageX;
    let currentY = event.touches[0].pageY;
    let that=this;
    var query = wx.createSelectorQuery()
    query.select('#record').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function (res) {
       // 显示区域的竖直滚动位置
      // 显示区域的竖直滚动位置
      // if (currentX < res[0].left || currentX > res[0].left + res[0].width || currentY < res[0].top || currentY > res[0].top + res[0].height)
      if (currentY < res[0].top){
        //取消录音操作
        that.setData({
          isCancel:true,
          showCancel:true,
        })
      }else{
        that.setData({
          isCancel: false,
          showCancel: false,
        })
      }
    })
  }
})