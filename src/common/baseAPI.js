import wepy from '@wepy/core'

wepy.baseToast = function(msg) {
  wepy.wx.showToast({
    title: msg,
    icon: 'none',
    duration: 3000
  })
}
