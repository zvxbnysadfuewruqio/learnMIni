import request from "./service/network.js"
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    const token=wx.getStorageSync('token')
    if(token&&token.length!==0){
      this.ckeck_token(token)
    }else{
      this.login()
    }

  },
  login(){
    wx.login({
      success: res => {
        const code = res.code
        request({
          url: "http://123.207.32.32:3000/login",
          method: "post",
          data: {
            code
          }
        }).then(res => {
          const token = res.data.token
          this.globalData.token = token

          //进行本地存储
          wx.setStorageSync('token', token)
        })
      }
    })
  },
  ckeck_token(token){
    wx.request({
      url: "http://123.207.32.32:3000/auth",
      method: "post",
      header:{
        token
      },
      success:res=>{
        if(!res.data.errCode){
          this.globalData.token = token
        }else{
          this.login
        }
        console.log(res)
      }
    })
  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  globalData:{
    name:'DGJ',
    age:18,
    token:''
  }
})
