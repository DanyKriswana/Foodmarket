import { ScrollView, View } from 'react-native'
import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { Buttons, Gap, Select, TextInput } from '../../components/atoms'
import { Header } from '../../components/molecules'

import { setLoading,} from '../../redux/action'
import { useForm, showMessage } from '../../utils'
import { styles } from './style'

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Tangerang',
    
  })
  const dispatch = useDispatch();
  const registerReducer = useSelector((state) => state.registerReducer)
  const photoReducer = useSelector((state) => state.photoReducer)

  const onSubmit = () => {
    console.log('form: ', form) 
    const data = {
      ...form,
      ...registerReducer,
    }
    dispatch(setLoading(true))
    axios.post('https://foodmarket-backend.buildwithangga.id/api/register', data)
    .then((res) => {
      console.log('data success: ', res.data);
      if (photoReducer.isUploadPhoto){
        const photoForUpload = new FormData();
        photoForUpload.append('file', photoReducer)

        axios.post(
          'http://foodmarket-backend.buildwithangga.id/api/user/photo',
          photoForUpload,
          {
            headers: {
              Authorization: `${res.data.data.token_type} ${res.data.data.access_token}`,
              'Content-Type': 'multipart/form-data',
            }
          })
          .then((resUpload) => {
            console.log('Success upload: ', resUpload)
          })
          .catch(err => {
            showMessage('Upload photo tidak berhasil')
          })
      }
      dispatch(setLoading(false))
      showMessage('Register Success', 'success');
      navigation.replace('SuccessSignUp');
    })
    .catch(error => {
      dispatch(setLoading(false))
      showMessage(error?.response?.data?.message)
      if(error.response.status === 422){
        console.error("Validation errors: ", error.response.data.message.error)
      } else{
        console.error("Error", error.message)
      }
    })
  }

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
          <Header title={'Address'} subTitle={'Make sure its valid'} onBack={() => {}} />
          <View style={styles.container}>
                  <TextInput 
                    label={'Phone No'} 
                    placeholder={'Type your phone number'} 
                    value={form.phoneNumber} 
                    onChangeText={(value) => setForm('phoneNumber', value)} 
                  />
                  <Gap height={16}/>
                  <TextInput 
                    label={'Address'} 
                    placeholder={'Type your address'} 
                    value={form.address} 
                    onChangeText={(value) => setForm('address', value)} 
                  />
                  <Gap height={16}/>
                  <TextInput 
                    label={'House No'} 
                    placeholder={'Type your house number'}
                    value={form.houseNumber} 
                    onChangeText={(value) => setForm('houseNumber', value)} 
                  />
                  <Gap height={16}/>
                  <Select 
                    label={'City'} 
                    placeholder={'Select City'}
                    value={form.city} 
                    onSelectChange={(value) => setForm('city', value)} 
                  />
                  <Gap height={24}/>
                  <Buttons 
                    text='Sign Up Now'
                    onPress={(onSubmit)}
                  />
          </View>
      </View>
    </ScrollView>
  )
}

export default SignUpAddress