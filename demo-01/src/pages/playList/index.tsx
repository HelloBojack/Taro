import React, { useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import { getCurrentInstance } from '@tarojs/taro'
// import TabBarPro from '@components/common/TabBarPro/TabBarPro'
import { getPlaylistDetail } from '@api/api'

import './index.scss'

const index = () => {
  useEffect(() => {
    async function fetchData() {
      let result = await getPlaylistDetail(getCurrentInstance().router.params.playId)

      // setIndexBannerList(result.data.banners)

    }
    fetchData()
    console.log(getCurrentInstance().router.params)
  }, [])
  return (
    <View>
      playList
      {/* <TabBarPro></TabBarPro> */}
    </View>
  );
}

export default index;