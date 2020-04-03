//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    cardList:[],
    //用户登录的code
    userCode:""
  },
  onLoad(){
    // GET https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code
    //发起请求
    wx.request({
      url: 'http://192.168.1.198:3000/',
      method:"GET",
      success:(res)=>{
       this.setData({
         cardList:res.data.data
       })
      }

    })
  },
  into:function(e){ 
    //可以获取到我们传过来的id值
    // console.log(e.currentTarget.id)
    // if (e.currentTarget.id===1){
    //   console.log(111)
    //   wx.navigateTo({
    //     url: 'pages/carda/carda',
    //   })
    // }
    wx.navigateTo({
      url: '/pages/card' + e.currentTarget.id + '/card' + e.currentTarget.id+'',
    })
  }
  

 
  
})
