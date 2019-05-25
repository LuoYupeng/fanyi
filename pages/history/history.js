const app = getApp()

//Page Object
Page({
  data: {
    history: []
  },
  //options(Object)
  onLoad: function(options) {
    
  },

  onShow: function() {
    this.setData({history: wx.getStorageSync('history')})
  },

  onTapItem: function(e) {
    wx.reLaunch({
      url: `/pages/index/index?query=${e.currentTarget.dataset.query}`
      })  
  },
  clearItem: function(){
    wx.clearStorageSync()
    this.setData({history: wx.getStorageSync('history')})
  },
  //item(index,pagePath,text)
  onTabItemTap:function(item) {

  }
});
  