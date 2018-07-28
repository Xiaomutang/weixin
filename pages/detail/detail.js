// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  preview: function (e) {
    var curr_img_url = e.currentTarget.dataset.src;
    // console.log( curr_img_url );
    wx.previewImage({
      current: curr_img_url,
      urls: this.data.detail.images
    });

  },
  setimages: function (arr) {
    // 取前 5 条数据, 如果数据不够 5 条, 直接返回原始数据
    if (arr.length <= 5) {
      return arr;
    }
    return arr.slice(0, 5);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 请求店铺数据
    wx.request({
      url: 'https://locally.uieee.com/shops/' + options.id,
      success: (res) => {
        this.setData({
          detail: res.data,
          imgs: this.setimages(res.data.images)
        });
      }
    });
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