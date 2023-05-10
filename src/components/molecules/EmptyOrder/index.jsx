import { View, Text } from 'react-native'
import React from 'react'

import { styles } from './styles'
import { globalStyles } from '../../../Helpers/globalStyles'

import { IlEmptyOrder } from '../../../assets/Ilustration'
import { Gap, SmallButtons } from '../../atoms/'
import { useNavigation } from '@react-navigation/native'

const EmptyOrder = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.page}>
      <IlEmptyOrder />
      <Gap height={30}/>
      <Text style={globalStyles.text.title}>Ouch! Hungry</Text>
      <Text style={globalStyles.text.subTitle}>Seems like you have not</Text>
      <Text style={globalStyles.text.subTitle}>Ordered any food yet</Text>
      <Gap height={30}/>
      <View style={styles.buttonContainer}>
        <SmallButtons text={'Find Foods'} onPress={() => navigation.replace('MainApp')}/>
      </View>
    </View>
  )
}

export default EmptyOrder