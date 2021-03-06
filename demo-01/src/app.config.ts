export default {
  pages: [
    'pages/index/index',
    'pages/profile/index',
    'pages/playList/index',
    'pages/play/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  requiredBackgroundModes: ["audio", "location"],
  tabBar: {
    color: '#bbc0ca',
    selectedColor: '1f83e1',
    backgroundColor: '#feffff',
    borderStyle: 'white',
    list: [{
      "pagePath": 'pages/index/index',
      "text": "首页"
    },
    {
      "pagePath": 'pages/profile/index',
      "text": "我的"
    },

    ]
  }
}
