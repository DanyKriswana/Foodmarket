import React from 'react'
import { View, Text, Image } from 'react-native'

import { ProfileDummy, ProfileDummy2 } from '../../../assets/Dummy'

import { styles } from './styles'
import { globalStyles } from '../../../Helpers/globalStyles'

const HomeProfile = () => {
  return (
    <View style={styles.profileContainer}>
        <View>
          <Text style={globalStyles.text.title}>FoodMarket</Text>
          <Text style={globalStyles.text.subTitle}>Let's get some foods</Text>
        </View>
        <Image source={ProfileDummy2} style={styles.photoProfile} />
      </View>
  )
}

export default HomeProfile