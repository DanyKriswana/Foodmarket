import React, { useState } from 'react'

import { Text, View } from 'react-native'

import {Picker} from '@react-native-picker/picker';

import { styles } from './style';
import { globalStyles } from '../../../Helpers/globalStyles';

const Select = ({label, placeholder}) => {
  const [selectedCity, setSelectedCity] = useState();

  return (
    <View>
        <Text style={globalStyles.text.standarTitle}>{label}</Text>
        <View style={styles.select}>
          <Picker
            placeholder={placeholder}
            selectedValue={selectedCity}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedCity(itemValue)
            }}
          >
          <Picker.Item label="Tangerang" value="Tangerang" />
          <Picker.Item label="Jakarta" value="jakarta" />
          <Picker.Item label="Bandung" value="bandung" />
          <Picker.Item label="Yogyakarta" value="jogja" />
          </Picker>
        </View>
    </View>
  )
}

export default Select