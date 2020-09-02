import React from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import TabBarPro from '@components/common/TabBarPro/TabBarPro'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

export default function Index() {
  return (
    <View className='profile'>
      <Text>Hello Profile!</Text>
      <TabBarPro></TabBarPro>
    </View>
  )
}
