import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtInput, AtButton } from 'taro-ui'
import TabBarPro from '@components/common/TabBarPro/TabBarPro'

import { loginByPhone } from '@api/api'

import './index.scss'

export default function Index() {
  const [usernameValue, setUsernameValue] = useState('')
  const handleChange = (value) => {
    setUsernameValue(value)
  }
  const onSubmit = () => {
    console.log(usernameValue)
  }
  // const onReset: (event) => {
  //   setUsernameValue('')
  // }
  return (
    <View className='profile'>

      <TabBarPro></TabBarPro>
    </View>
  )
}
