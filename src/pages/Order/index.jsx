import { View, Text } from 'react-native'
import React, { useState } from 'react'

import { styles } from './styles'

import EmptyOrder from '../../components/molecules/EmptyOrder'
import Header from '../../components/molecules/Header'
import { OrderTabSection } from '../../components/molecules'

const Order = () => {
  const [isEmpty] = useState(false)
  return (
    <View style={styles.page}>
      {isEmpty ? (
        <EmptyOrder /> 
      ) : (
      <View style={styles.content}>
        <Header title={'Your Order'} subTitle={'wait for the best meal'}/>
        <View style={styles.tabContainer}>
          <OrderTabSection />
        </View>
      </View>
      )}
    </View>
  )
}

export default Order