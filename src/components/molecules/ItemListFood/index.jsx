import React from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { styles } from './styles'
import { globalStyles } from '../../../Helpers/globalStyles'

import Rating from '../Rating'

const ItemListFood = ({image, label, price, onPress, items, rating, type, date, status}) => {

  const renderContent = () => {
    switch(type){
      case 'product':
        // item list product seperti di home page
        return (
          <>
            <View style={styles.textImage}>
              <Text style={globalStyles.text.standarTitle}>{label}</Text>
              <Text style={globalStyles.text.subStandarTitle}>{price}</Text>
            </View>
            <Rating rating={rating} />
          </>
        )
      case 'order-summary':
        // item order summary
        return (
          <>
            <View style={styles.textImage}>
              <Text style={globalStyles.text.standarTitle}>{label}</Text>
              <Text style={globalStyles.text.subStandarTitle}>{price}</Text>
            </View>
            <Text style={globalStyles.text.subStandarTitle}>{items} items</Text>
          </>
        )
      case 'in-progress':
        // item in progress
        return (
          <>
            <View style={styles.textImage}>
              <Text style={globalStyles.text.standarTitle}>{label}</Text>
              <Text style={globalStyles.text.subStandarTitle}>
                  {items} items • IDR {price}
              </Text> 
            </View>
          </>
        )
      case 'past-order':
        // item past order
        return (
          <>
            <View style={styles.textImage}>
              <Text style={globalStyles.text.standarTitle}>{label}</Text>
              <Text style={globalStyles.text.subStandarTitle}>
                  {items} items • IDR {price}
              </Text>
            </View>
            <View>
              <Text style={[globalStyles.text.subStandarTitle, {fontSize: 10}]}>{date}</Text>
              <Text style={[globalStyles.text.subStandarTitle, {fontSize: 10, color: '#D9435E'}]}>{status}</Text>
            </View>
          </>
        )
      default:
        // item product
        return (
          <>
            <View style={styles.textImage}>
              <Text style={globalStyles.text.standarTitle}>{label}</Text>
              <Text style={globalStyles.text.subStandarTitle}>{price}</Text>
            </View>
            <Rating />
          </>
        )
    }
  }

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} >
      <View style={styles.listContainer}>
          <Image 
            source={image}
            style={styles.imageStyles}
          />
          {renderContent()}
        </View>
    </TouchableOpacity>
  )
}

export default ItemListFood