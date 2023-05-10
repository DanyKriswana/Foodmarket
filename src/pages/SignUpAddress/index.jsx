import { View } from 'react-native'
import React from 'react'

import { Buttons, Gap, Select, TextInput } from '../../components/atoms'
import { Header } from '../../components/molecules'

import { styles } from './style'

const SignUpAddress = ({navigation}) => {
  return (
    <View style={styles.page}>
        <Header title={'Address'} subTitle={'Make sure its valid'} onBack={() => {}} />
        <View style={styles.container}>
                <TextInput label={'Phone No'} placeholder={'Type your phone number'} />
                <Gap height={16}/>
                <TextInput label={'Address'} placeholder={'Type your address'} />
                <Gap height={16}/>
                <TextInput label={'House No'} placeholder={'Type your house number'} />
                <Gap height={16}/>
                <Select label={'City'} placeholder={'Select City'}/>
                <Gap height={24}/>
                <Buttons 
                  text='Sign Up Now'
                  onPress={() => navigation.navigate('SuccessSignUp')}
                />
        </View>
    </View>
  )
}

export default SignUpAddress