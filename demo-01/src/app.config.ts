export default {
  pages: [
    'pages/index/index',
    'pages/profile/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#bbc0ca',
    selectedColor: '1f83e1',
    backgroundColor: '#feffff',
    borderStyle: 'white',
    list: [{
      "pagePath": 'pages/index/index',
      "text": ""
    }, {
      "pagePath": 'pages/profile/index',
      "text": ""
    }]
  }
}
