
const app=getApp();
import request from "../../service/network.js"

// console.log(app.globalData.name)
// console.log(app.globalData.age)

// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"DGJ",
    age:18,
    res:[1,2,3,4,5],
    isFalse:true,
    counter:0,
    list:[]
  },
  addCounter(){
    this.setData({
      counter: this.data.counter+1
    })
    // this.data.counter+=1;
  },
  reCounter() {
    this.setData({
      counter: this.data.counter - 1
    })
    // this.data.counter+=1;
  },
  //获取用户信息
  getUserInfo(event){
    // console.log(event)
  },
  //滚动事件
  onPageScroll(obj){
    // console.log(obj)
  },
  //显示toast
  handleShow(){
    wx.showToast({
      title: '12312321',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: 'http://123.207.32.32:8000/api/v1/recommend',
    //   success:res=>{
    //     // console.log(res)
    //     const data=res.data.data.list
    //     this.setData({
    //       list: data
    //     })
    //   }
    // })

    request({
      url:"http://123.207.32.32:8000/api/v1/recommend",
    }).then(res=>{
      // console.log(res)
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
    console.log("下拉刷新")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上拉加载")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})