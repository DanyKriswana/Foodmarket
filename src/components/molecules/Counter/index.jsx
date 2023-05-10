import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { IcMin, IcPlus } from '../../../assets/Icon'
import { Gap } from '../../atoms'

import { styles } from './styles'
import { globalStyles } from '../../../Helpers/globalStyles'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <IcMin onPress={() => setCount(count - 1)} />
        </TouchableOpacity>
        <Gap width={10}/>
        <Text style={globalStyles.text.standarTitle}>{count}</Text>
        <Gap width={10}/>
        <TouchableOpacity>
            <IcPlus onPress={() => setCount(count + 1)} />
        </TouchableOpacity>
    </View>
  )
}

export default Counter