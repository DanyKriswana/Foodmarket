import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { styles } from './styles'
import { globalStyles } from '../../Helpers/globalStyles'

import { Gap, SmallButtons } from '../../components/atoms'
import { IlEmptyOrder } from '../../assets/Ilustration'

const CancelledOrder = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.page}>
      <IlEmptyOrder />
      <Gap height={30}/>
      <Text style={globalStyles.text.title}>Ouch! Hungry</Text>
      <Text style={globalStyles.text.subTitle}>Seems you cancelled your order</Text>
      <Gap height={30}/>
      <View style={styles.buttonContainer}>
        <SmallButtons text={'Order Other Foods'} onPress={() => navigation.replace('MainApp')}/>
      </View>
    </View>
  )
}

export default CancelledOrder