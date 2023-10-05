import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { ProfileDummy2 } from '../../../assets/Dummy'

import { useNavigation } from '@react-navigation/native'
import { globalStyles } from '../../../Helpers/globalStyles'
import { styles } from './styles'

const HomeProfile = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.profileContainer}>
        <View>
          <Text style={globalStyles.text.title}>FoodMarket</Text>
          <Text style={globalStyles.text.subTitle}>Let's get some foods</Text>
        </View>
    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Profile')}> 
          <Image source={ProfileDummy2} style={styles.photoProfile} />
        </TouchableOpacity>
      </View>
  )
}

export default HomeProfile