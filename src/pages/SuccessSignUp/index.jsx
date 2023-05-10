import { View, Text } from 'react-native'
import React from 'react'

import {styles} from './style'
import { IlSuccessSignUp } from '../../assets/Ilustration'
import { Gap, SmallButtons } from '../../components/atoms'
import { globalStyles } from '../../Helpers/globalStyles'

const SuccessSignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <IlSuccessSignUp />
      <Gap height={30}/>
      <Text style={globalStyles.text.title}>Yeay! Completed</Text>
      <Text style={globalStyles.text.subTitle}>Now you are able to order</Text>
      <Text style={globalStyles.text.subTitle}>some foods as a self-reward</Text>
      <Gap height={30}/>
      <View style={styles.buttonContainer}>
        <SmallButtons text={'Find Foods'} onPress={() => navigation.replace('MainApp')}/>
      </View>
    </View>
  )
}

export default SuccessSignUp;