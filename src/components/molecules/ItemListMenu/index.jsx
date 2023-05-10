import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { IcNext } from '../../../assets/Icon'
import { styles } from './styles'
import { globalStyles } from '../../../Helpers/globalStyles'

const ItemListMenu = ({label}) => {
  return (
    <TouchableOpacity activeOpacity={0.6}>
        <View style={styles.container}>
            <Text style={globalStyles.text.buttonText}>{label}</Text>
            <IcNext />
        </View>
    </TouchableOpacity>
  )
}

export default ItemListMenu