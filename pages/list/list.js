// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageIndex: 1,       // 当前页码
    pageSize: 10,       // 每页显示的条数
    hasData: true,      // 判断是否还有数据
    list: []            // 用于渲染页面的数据
  },
  tapItem: function (e) {
    // 跳转 detail, 需要带参数
    // console.log( e.currentTarget.dataset.id );
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    var url = 'https://locally.uieee.com/categories/' + id
      + '/shops?_page=' + this.data.pageIndex + '&_limit=' + this.data.pageSize;
    wx.request({
      url: url,
      success: (res) => {
        this.setData({
          id: id,
          list: res.data
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
    console.log('现在是: 第 ' + this.data.pageIndex + ' 页');
    console.log('即将请求: 第 ' + (this.data.pageIndex + 1) + ' 页');
    if (!this.data.hasData) return;
    var pageIndex = this.data.pageIndex;
    pageIndex++;
    var id = this.data.id;
    var url = 'https://locally.uieee.com/categories/' + id
      + '/shops?_page=' + pageIndex + '&_limit=' + this.data.pageSize;
    wx.request({
      url: url,
      // 请求回来以后, 我们要判断是不是还有数据
      success: (res) => {
        if (res.data.length > 0) {
          // 有数据: 将数据追加到 this.data.list 中( 注意调用 setData )
          var list = this.data.list;
          // list.push( ...res.data );
          Array.prototype.push.apply(list, res.data);
          this.setData({
            pageIndex: pageIndex,  // 更新页码
            list: list             // 更新数据
          });
        } else {
          // 没有数据: 设置 hasData 为 false
          this.setData({ hasData: false });
        }
      }
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})