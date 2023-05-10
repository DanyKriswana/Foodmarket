import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { styles } from './style'
import { IcBack } from '../../../assets/Icon'

import { globalStyles } from '../../../Helpers/globalStyles'

const Header = ({title, subTitle, onBack, navigation}) => {
  return (
    <View style={styles.container}>
      { onBack && (
        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()} >
          <View style={styles.back}>
            <IcBack />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <Text style={globalStyles.text.title}>{title}</Text>
        <Text style={globalStyles.text.subTitle}>{subTitle}</Text>
      </View>
    </View>
  )
}

export default Header