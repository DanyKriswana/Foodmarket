import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { launchImageLibrary } from 'react-native-image-picker'

import { Buttons, Gap, TextInput } from '../../components/atoms'
import { Header } from '../../components/molecules'

import { styles } from './style'
import { showMessage, useForm } from '../../utils'

const SignUp = ({navigation}) => {
    const [form, setForm] = useForm({
        name: '',
        email: '',
        password: '',
    })

    const [photo, setPhoto] = useState('');
    const dispatch = useDispatch();

    const onSubmit = () => {
        console.log('form', form);
        dispatch({type: 'SET_REGISTER', value: form})
        navigation.navigate('SignUpAddress')
    }

    const addPhoto = () => {

        const options = {
            mediaType: 'photo',
            quality: 0.5,
            maxHeight: 200,
            maxWidth: 200
        }

        launchImageLibrary(options, (response) => {
            console.log('Response= ', response)

            if (response.didCancel || response.errorCode) {
              console.log('Anda tidak memilih foto');
              showMessage('Anda tidak memilih foto')
            }  else {
              const source = {uri: response.assets};
              const dataImage = {
                uri: response.uri,
                type: response.type,
                name: response.fileName,
              }

              setPhoto(source.uri)
              dispatch({type: 'SET_PHOTO', value: dataImage})
              dispatch({type: 'SET_UPLOAD_STATUS', value: true})
            }
        });
    }

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.page}>
            <Header title={'Sign Up'} subTitle={'Register and eat'} onBack={() => {}} />
            <View style={styles.container}>
                <View style={styles.photo}>
                    <TouchableOpacity onPress={addPhoto}>
                        <View style={styles.borderPhoto}>
                            {photo ? (
                                <Image source={photo} style={styles.imageContainer} />
                            ) : (
                                <View style={styles.photoContainer}>
                                    <Text style={styles.addPhoto}>Add Photo</Text>
                                </View>
                            )}
                        </View>
                    </TouchableOpacity>
                </View>
                <Gap height={20} />
                <TextInput 
                    label={'Full Name'} 
                    placeholder={'Type your full name'} 
                    value={form.name} 
                    onChangeText={(value) => setForm('name', value)}
                />
                <Gap height={16}/>
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
                    text={'Continue'} 
                    onPress={(onSubmit)}/>
            </View>
        </View>
    </ScrollView>
  )
}

export default SignUp