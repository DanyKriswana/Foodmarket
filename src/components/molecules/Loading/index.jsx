import React from 'react'
import { ActivityIndicator, View, Text } from 'react-native'

import { styles } from './styles'
import { colors } from '../../../Helpers/colors'

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.green1} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  )
}

export default Loading