import React from 'react'
import { Text, View, TextInput as TextInputRN } from 'react-native'

import { styles } from './style'

import { globalStyles } from '../../../Helpers/globalStyles'


const TextInput = ({label, placeholder, ...restProps}) => {
  return (
    <View>
      <Text style={globalStyles.text.standarTitle}>{label}</Text>
      <TextInputRN style={styles.textInput} placeholder={placeholder} {...restProps} />
    </View>
  )
}

export default TextInput