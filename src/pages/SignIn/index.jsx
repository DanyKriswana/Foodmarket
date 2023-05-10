import React from 'react'
import { View } from 'react-native'

import { styles } from './style'

import { Buttons, Gap, TextInput } from '../../components/atoms'
import { Header } from '../../components/molecules'
import { colors } from '../../Helpers/colors'

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title='Sign In' subTitle='Find your best ever meal' />
      <View style={styles.container}>
        <TextInput label={'Email Address'} placeholder={'Type your email address'} />
        <Gap height={16}/>
        <TextInput label={'Password'} placeholder={'Type your password'} />
        <Gap height={24}/>
        <Buttons text={'Sign In'} onPress={() => navigation.replace('MainApp')} />
        <Gap height={12}/>
        <Buttons text={'Create New Account'} color={colors.greyThemeColor} textColor= 'white' onPress={() => navigation.navigate('SignUp')} />
      </View>
    </View>
  )
}

export default SignIn