import React from 'react'
import { View, Text } from 'react-native'


import { styles } from './styles'
import { globalStyles } from '../../../Helpers/globalStyles'
import { colors } from '../../../Helpers/colors'

const ItemValue = ({label, value, textColor=colors.black}) => {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.text.subTitle}>{label}</Text>
      <Text style={styles.value(textColor)}>{value}</Text>
    </View>
  )
}

export default ItemValue