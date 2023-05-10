import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { styles } from './styles'
import { colors } from '../../../Helpers/colors'

const SmallButtons = ({text, onPress, color=colors.yellowThemeColor, textColor=colors.black}) => {
  return (
    <TouchableOpacity style={styles.container(color)} onPress={onPress} activeOpacity={0.6}>
        <Text style={styles.text(textColor)}>{text}</Text>
    </TouchableOpacity>
  )
}

export default SmallButtons