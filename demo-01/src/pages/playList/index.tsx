import React, { useState, useEffect, } from 'react'
import { View, Text, Image } from '@tarojs/components'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import {
  getPlaylistDetail,
} from '@api/api'
import './index.scss'

const index = () => {
  const [playlistDetail, setPlaylistDetail] = useState({ name: '', coverImgUrl: '' })
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    async function fetchData() {
      let result = await getPlaylistDetail(getCurrentInstance().router.params.playId)
      setPlaylistDetail(result.data.playlist)
      setTracks(result.data.playlist.tracks)
    }
    fetchData()
  }, [])
  const gotoSong = (songId: string) => {
    Taro.redirectTo({ url: '/pages/play/index?id=' + songId })
  }

  return (
    <View>
      <View className="playlistDetail-header">
        <Image src={playlistDetail.coverImgUrl}></Image>
        <View>
          <Text>{playlistDetail.name}</Text>
        </View>
      </View>
      <View>
        {tracks.map((item, index) => {
          return (
            <View className='playItem' onClick={() => gotoSong(item.id)}>
              <Text className='number'>{index + 1}</Text>
              <Text>{item.name}-{item.ar[0].name}</Text>
              <View>
                button
              </View>
            </View>
          )
        })}
      </View>
    </View>
  );
}

export default index;