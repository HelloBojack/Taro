import Taro from '@tarojs/taro'
import React, { useState, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { getCurrentInstance } from '@tarojs/taro'
import {
  getSongUrl,
  getSongDetail
} from '@api/api'
import './index.scss'

const index = () => {
  let [songUrl, setSongUrl] = useState()
  let [songDetail, setSongDetail] = useState({ name: '', al: { picUrl: '' } })
  const backgroundAudioManager = Taro.getBackgroundAudioManager()
  useEffect(() => {
    async function fetchData() {
      let result = await getSongUrl(getCurrentInstance().router.params.id)
      let result2 = await getSongDetail(getCurrentInstance().router.params.id)
      setSongUrl(result.data.data[0].url)
      setSongDetail(result2.data.songs[0])
    }
    fetchData()
  }, [])
  const playMusic = () => {
    backgroundAudioManager.title = songDetail.name
    backgroundAudioManager.coverImgUrl = songDetail.al.picUrl
    backgroundAudioManager.src = songUrl
    backgroundAudioManager.play()
  }
  return (
    <View>
      <AtButton onClick={() => { playMusic() }}>Play</AtButton>
    </View>
  );
}

export default index;