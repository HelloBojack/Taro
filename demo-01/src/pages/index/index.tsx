import React, { useState, useEffect, } from 'react'
import { View, Text, Image, Swiper, SwiperItem } from '@tarojs/components'
import { AtButton, AtIcon, AtAvatar } from 'taro-ui'
import TabBarPro from '@components/common/TabBarPro/TabBarPro'

import { getIndexBanner, getPersonalizedList } from '@api/api'

import './index.scss'



export default function Index() {
  const [indexBannerList, setIndexBannerList] = useState([])
  const [personalizedList, setPersonalizedList] = useState([])
  // const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let result = await getIndexBanner()
      let result2 = await getPersonalizedList()
      setIndexBannerList(result.data.banners)
      setPersonalizedList(result2.data.result)
    }
    fetchData()
  }, [])

  return (
    <View className='index'>
      <View>
        <Swiper
          className="index-swiper"
          indicatorDots
          indicatorColor='#999'
          indicatorActiveColor='#333'
          autoplay
          circular
        >
          {
            indexBannerList.map((n, index) => {
              return (<SwiperItem>
                <View>
                  <Image src={n.pic} />
                </View>
              </SwiperItem>)
            })
          }
        </Swiper>
      </View>
      <View className='index-icon-list'>
        <View>
          <AtIcon prefixClass='icon' value='icon-5' size='50'></AtIcon>
          <Text>每日推荐</Text>
        </View>
        <View>
          <AtIcon prefixClass='icon' value='icon-5' size='50'></AtIcon>
          <Text>歌单</Text>
        </View>
        <View>
          <AtIcon prefixClass='icon' value='icon-5' size='50'></AtIcon>
          <Text>排行榜</Text>
        </View>
        <View>
          <AtIcon prefixClass='icon' value='icon-5' size='50'></AtIcon>
          <Text>电台</Text>
        </View>
        <View>
          <AtIcon prefixClass='icon' value='icon-5' size='50'></AtIcon>
          <Text>直播</Text>
        </View>
      </View>
      <View className='personalized-list'>
        <Text>人气歌单推荐</Text>
        <View style="overflowX: scroll">
          {
            personalizedList.map((n, index) => {
              return (
                <View className='personalized-list-item'>
                  <Image src={n.picUrl} />
                  <Text>{n.name}</Text>
                </View>
              )
            })
          }
        </View>
      </View>
      <TabBarPro></TabBarPro>
    </View >
  )
}
