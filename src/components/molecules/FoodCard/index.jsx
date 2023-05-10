import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../../Helpers/globalStyles'
import Rating from '../Rating'

import { styles } from './styles'

const FoodCard = ({label, image, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image}/>
        <View style={styles.content}>
          <Text style={globalStyles.text.standarTitle}>{label}</Text>
          <Rating />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default FoodCard