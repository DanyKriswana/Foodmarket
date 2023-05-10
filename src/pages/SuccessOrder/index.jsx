import { View, Text } from 'react-native'
import React from 'react'

import { styles } from './styles'

import { IlSuccessOrder } from '../../assets/Ilustration'
import { Gap, SmallButtons } from '../../components/atoms'
import { globalStyles } from '../../Helpers/globalStyles'
import { colors } from '../../Helpers/colors'



const SuccessOrder = ({navigation}) => {
  return (
    <View style={styles.page}>
      <IlSuccessOrder />
      <Gap height={30}/>
      <Text style={globalStyles.text.title}>You've Made Order</Text>
      <Text style={globalStyles.text.subTitle}>Just stay at home while we are</Text>
      <Text style={globalStyles.text.subTitle}>preparing your best foods</Text>
      <Gap height={30}/>
      <View style={styles.buttonContainer}>
        <SmallButtons text={'Order Other Foods'} onPress={() => navigation.replace('MainApp')}/>
        <Gap height={12}/>
        <SmallButtons text={'View My Order'} color={colors.greyThemeColor} textColor='white' onPress={() => navigation.replace('Order')}/>
      </View>
    </View>
  )
}

export default SuccessOrder