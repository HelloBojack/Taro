import React, { useState, useEffect } from 'react';
import Taro from '@tarojs/taro';
import { AtTabBar } from 'taro-ui'

const TabBarPro = () => {
  const [tabCurrent, setTabCurrent] = useState(0);
  const navList = ['/pages/index/index', '', '/pages/profile/index'];
  const switchTab = (url: string, index: number) => {
    Taro.setStorageSync('navItem', index)
    Taro.switchTab({ url: url })
  }
  const handleClick = (value: number) => {
    setTabCurrent(value)
    switchTab(navList[value], value)
  }
  useEffect(() => {
    Taro.hideTabBar()
  }, [])

  return (
    <AtTabBar
      fixed
      tabList={[
        { title: '主页', iconType: 'home' },
        { title: 'Play', iconType: 'play' },
        { title: '我的', iconType: 'heart' }
      ]}
      onClick={handleClick.bind(this)}
      current={tabCurrent}
    />
  );
}

export default TabBarPro;