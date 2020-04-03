// pages/read/read.js
Page({

  /**
   * 页面的初始数据
   */
 
  data: {
    // 默认的tabbar id
    tabbarIndex: "1",
    tabbarList: [{
        id: "1",
        name: "推荐"
      },
      {
        id: "2",
        name: "分类"
      },
      {
        id: "3",
        name: "排行"
      },
      {
        id: "4",
        name: "文学艺术"
      },
      {
        id: "5",
        name: "名著经典"
      }
    ],
    category:[]

  },
  //点击tabbar
    clicktab(e){
      // console.log(e) 
      return this.setData({
        tabbarIndex: e.currentTarget.id
      })
     

    },
    onReady:function(){
      

    },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    //获取数据分类数据,所有的
    let self = this
    wx.request({
      url: 'http://192.168.1.198:3000/api/category',
      method: "GET",
      success: function (res) {
        self.setData({
          category: res.data.data,
         
        })


      }
    })
    // console.log(this.data)
   

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
  
})