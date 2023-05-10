import React from 'react'
import { ScrollView, View } from 'react-native'

import { styles } from './styles'

import { FoodDummy1, FoodDummy3, FoodDummy5, FoodDummy7 } from '../../assets/Dummy'
import { Gap } from '../../components/atoms'
import { FoodCard, HomeProfile, HomeTabSection } from '../../components/molecules'

const Home = ({navigation}) => {

  return (
    <View style={styles.page} >
      <HomeProfile />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodcardContainer}>
            <Gap width={12} />
            <FoodCard image={FoodDummy1} label={'Cherry Healthy'} onPress={() => navigation.navigate('FoodDetail')}/>
            <FoodCard image={FoodDummy7} label={'Burger Tomato'} onPress={() => navigation.navigate('FoodDetail')}/>
            <FoodCard image={FoodDummy5} label={'Shrimp Mentai'} onPress={() => navigation.navigate('FoodDetail')}/>
            <FoodCard image={FoodDummy3} label={'Curry Funny'} onPress={() => navigation.navigate('FoodDetail')}/>
          </View>
        </ScrollView>
      </View>
      <View style={styles.tabContainer}>
        <HomeTabSection />
      </View>
    </View>
  )
}

export default Home