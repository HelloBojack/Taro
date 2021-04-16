import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtInput, AtButton } from 'taro-ui'
import TabBarPro from '@components/common/TabBarPro/TabBarPro'

import { loginByPhone } from '@api/api'

import './index.scss'

export default function Index() {
  const [loginForm, setLoginForm] = useState({
    usernameValue: '',
    passwordValue: ''
  })

  const handleUsernameValueChange = (e) => {
    console.log(e)

  }
  const handleSumbit = async () => {
    const result = await loginByPhone(loginForm);
    console.log(loginForm)
    // console.log(passwordValue)
  }


  return (
    <View className='profile'>
      <View>
        <AtInput
          name='usernameValue'
          type='text'
          placeholder='请输入用户名'
          value={loginForm.usernameValue}
          onChange={e => {
            setLoginForm({
              ...loginForm,
              usernameValue: e
            })
          }}
        />
        <AtInput
          name='passwordValue'
          type='password'
          placeholder='密码不能少于10位数'
          value={loginForm.passwordValue}
          onChange={e => {
            setLoginForm({
              ...loginForm,
              passwordValue: e
            })
          }}
        />
        <AtButton type='primary' onClick={handleSumbit}>登录</AtButton>
      </View>
      <TabBarPro></TabBarPro>
    </View >
  )
}
