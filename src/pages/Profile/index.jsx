import React from 'react'
import { Image, Text, View } from 'react-native'

import { styles } from './styles'
import { globalStyles } from '../../Helpers/globalStyles'

import { ProfileDummy2 } from '../../assets/Dummy'
import { ProfileTabSection } from '../../components/molecules'

const Profile = () => {
  return (
    <View style={styles.page}>
      <View style={styles.profileDetail}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <Image source={ProfileDummy2} style={styles.photoContainer}/>
          </View>
        </View>
        <Text style={[globalStyles.text.title, styles.name]}>Dany Kriswana</Text>
        <Text  style={[globalStyles.text.subTitle, styles.email]}>bocchithe@rock.com</Text>
      </View>
      <View style={styles.tabContainer}>
        <ProfileTabSection />
      </View>
    </View>
  )
}

export default Profile