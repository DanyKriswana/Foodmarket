import React from 'react';
import { ScrollView, Text, useWindowDimensions, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native';

import {styles} from './styles'

import ItemListFood from '../ItemListFood';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4, FoodDummy7, FoodDummy8, FoodDummy9, MiniDummy1 } from '../../../assets/Dummy';


const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ 
        backgroundColor: '#020202',  
        height: 3,
      }}
      style={{ backgroundColor: 'white', elevation: 0, shadowOpacity: 0, borderBottomColor: '#F2F2F2', borderBottomWidth: 1 }}
      tabStyle={{width: 'auto'}}
      renderLabel={({ route, focused, color }) => (
        <Text style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3'
          }}>
            {route.title}
        </Text>
      )}
    />
    );
  
    const NewTaste = () => {
      const navigation = useNavigation();
      return(
        <ScrollView>
          <View>
            <ItemListFood
              rating={4}
              image={MiniDummy1}
              label={'Curry Funny'}
              price={'IDR 289.000'} 
              onPress={() => navigation.navigate('FoodDetail')}
            />
            <ItemListFood
              rating={4} 
              image={FoodDummy8} 
              label={'Chicken Bakar'} 
              price={'IDR 4.509.000'} 
              onPress={() => navigation.navigate('FoodDetail')}
            />
            <ItemListFood
              rating={4} 
              image={FoodDummy9} 
              label={'Shrimp Mentai'} 
              price={'IDR 999.000'} 
              onPress={() => navigation.navigate('FoodDetail')}
            />
            <ItemListFood
              rating={4} 
              image={FoodDummy7} 
              label={'Burger Tomato'} 
              price={'IDR 95.000'} 
              onPress={() => navigation.navigate('FoodDetail')}/>
          </View>
        </ScrollView>
      );
    };
  
    const Popular = () => {
      const navigation = useNavigation();
      return(
        <ScrollView>
          <View>
            <ItemListFood
              rating={4}
              image={FoodDummy2}
              label={'Avosalado'}
              price={'IDR 85.000'}
              onPress={() => navigation.navigate('FoodDetail')}
            />
            <ItemListFood
              rating={4}
              image={FoodDummy4}
              label={'Latte Fate'}
              price={'IDR 29.000'}
              onPress={() => navigation.navigate('FoodDetail')}
            />
            <ItemListFood
              rating={4}
              image={FoodDummy7}
              label={'Burger Tomato'}
              price={'IDR 95.000'}
              onPress={() => navigation.navigate('FoodDetail')}/>
            <ItemListFood
              rating={4}
              image={FoodDummy1}
              label={'Cherry Healthy'}
              price={'IDR 878.000'}
              onPress={() => navigation.navigate('FoodDetail')}/>
          </View>
        </ScrollView>  
      );
    };

    const Recommended = () => {
      const navigation = useNavigation();
      return(
        <ScrollView>
          <View>
            <ItemListFood
              type="product"
              rating={4}
              image={FoodDummy1}
              label={'Cherry Healthy'}
              price={'IDR 878.000'}
              onPress={() => navigation.navigate('FoodDetail')}
            />
            <ItemListFood
              type="product"
              rating={4} 
              image={FoodDummy7} 
              label={'Burger Tomato'} 
              price={'IDR 95.000'} 
              onPress={() => navigation.navigate('FoodDetail')}
            />
            <ItemListFood
              type="product"
              rating={4} 
              image={FoodDummy9}
              label={'Shrimp Mentai'}
              price={'IDR 999.000'}
              onPress={() => navigation.navigate('FoodDetail')}
            />
            <ItemListFood
              type="product"
              rating={4} 
              image={FoodDummy3}
              label={'Curry Funny'}
              price={'IDR 289.000'}
              onPress={() => navigation.navigate('FoodDetail')}
            />
          </View>
        </ScrollView>
      );
    };
  
    const renderScene = SceneMap({
      1: NewTaste,
      2: Popular,
      3: Recommended
    });

const HomeTabSection = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'New Taste' },
        { key: '2', title: 'Popular' },
        { key: '3', title: 'Recommended' },
    ]);

const layout = useWindowDimensions();

  return (
    <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        style={{backgroundColor: 'white'}}
    />
  )
}

export default HomeTabSection