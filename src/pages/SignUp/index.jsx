import React from 'react'
import { View, Text } from 'react-native'

import { Buttons, Gap, TextInput } from '../../components/atoms'
import { Header } from '../../components/molecules'

import { styles } from './style'

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
        <Header title={'Sign Up'} subTitle={'Register and eat'} onBack={() => {}} />
        <View style={styles.container}>
            <View style={styles.photo}>
                <View style={styles.borderPhoto}>
                    <View style={styles.photoContainer}>
                        <Text style={styles.addPhoto}>Add Photo</Text>
                    </View>
                </View>
            </View>
            <Gap height={20} />
            <TextInput label={'Full Name'} placeholder={'Type your full name'} />
            <Gap height={16}/>
            <TextInput label={'Email Address'} placeholder={'Type your email address'} />
            <Gap height={16}/>
            <TextInput label={'Password'} placeholder={'Type your password'} />
            <Gap height={24}/>
            <Buttons text={'Continue'} onPress={() => navigation.navigate('SignUpAddress')}/>
        </View>
    </View>
  )
}

export default SignUp