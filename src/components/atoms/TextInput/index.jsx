import React from 'react'
import { Text, View, TextInput as TextInputRN } from 'react-native'

import { styles } from './style'

import { globalStyles } from '../../../Helpers/globalStyles'


const TextInput = ({label, placeholder}) => {
  return (
    <View>
      <Text style={globalStyles.text.standarTitle}>{label}</Text>
      <TextInputRN style={styles.textInput} placeholder={placeholder} />
    </View>
  )
}

export default TextInput