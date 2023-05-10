import React from 'react'
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import { BGDummy1 } from '../../assets/Dummy'
import { IcBackWhite } from '../../assets/Icon'

import { Gap, SmallButtons } from '../../components/atoms'
import { Rating } from '../../components/molecules'
import Counter from '../../components/molecules/Counter'

import { styles } from './styles'
import { globalStyles } from '../../Helpers/globalStyles'


const FoodDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ImageBackground source={BGDummy1} style={styles.cover}>
        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()}>
          <IcBackWhite style={styles.back} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.foodContainer}>
            <View>
              <Text style={globalStyles.text.standarTitle}>Cherry Healthy</Text>
              <Rating/>
            </View>
            <Counter />
          </View>
          <Gap height={12}/>
          <Text style={globalStyles.text.subTitle}>
          Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan pola makan
          yang cukup tinggi dengan mengutamakan diet yang sehat dan teratur.
          </Text>
          <Gap height={16}/>
          <Text style={globalStyles.text.standarTitle}>Ingredients:</Text>
          <Text style={globalStyles.text.subTitle}>Seledri, telur, blueberry, madu.</Text>
        </View>
        <View style={styles.footer} >
          <View style={styles.priceContainer}>
            <Text style={globalStyles.text.subTitle}>Total Price:</Text>
            <Text style={globalStyles.text.standarTitle}>IDR 12.289.000</Text>
          </View>
          <View style={styles.button}>
            <SmallButtons text={'Order Now'} onPress={() => navigation.navigate('OrderSummary')}/>
          </View>  
        </View>
      </View>
    </View>
  )
}

export default FoodDetail