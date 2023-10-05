import React from 'react'
import { View } from 'react-native'


import axios from 'axios'
import { styles } from './style'

import { Buttons, Gap, TextInput } from '../../components/atoms'
import { Header } from '../../components/molecules'
import { colors } from '../../Helpers/colors'
import { showMessage, useForm } from '../../utils'


const SignIn = ({navigation}) => {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [form, setForm] =useForm({
    email: '',
    password: ''
  })
  
  const onSubmit = () => {
    console.log('form: ', form);
    axios.post('http://foodmarket-backend.buildwithangga.id/api/login', form)
    .then((res) => {
      console.log('success', res);
      showMessage('Sign In Success', 'success')
      navigation.replace('MainApp')
    })
    .catch((err) => {
      console.log('error', err);
      showMessage('Sign In Failed', 'danger')
    });
  }
  
  return (
    <View style={styles.page}>
      <Header title='Sign In' subTitle='Find your best ever meal' />
      <View style={styles.container}>
        <TextInput 
          label={'Email Address'} 
          placeholder={'Type your email address'} 
          value={form.email} 
          onChangeText={(value) => setForm('email', value)} 
        />
        <Gap height={16}/>
        <TextInput 
          label={'Password'} 
          placeholder={'Type your password'} 
          value={form.password}
          onChangeText={(value) => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={24}/>
        <Buttons 
          text={'Sign In'} 
          onPress={(onSubmit)}  
          // onPress={() => navigation.replace('MainApp')}
        />
        <Gap height={12}/>
        <Buttons text={'Create New Account'} color={colors.greyThemeColor} textColor= 'white' onPress={() => navigation.navigate('SignUp')} />
      </View>
    </View>
  )
}

export default SignIn