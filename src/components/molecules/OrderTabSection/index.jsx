import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, Text, useWindowDimensions, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';


import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4, FoodDummy7, FoodDummy8, FoodDummy9, MiniDummy1 } from '../../../assets/Dummy';
import ItemListFood from '../ItemListFood';


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
  
    const InProgress = () => {
      const navigation = useNavigation();
      return(
        <ScrollView>
          <View>
            <ItemListFood
              type="in-progress"
              image={FoodDummy2}
              label={'Avosalado'}
              items={3}
              price={'255.000'}
              onPress={() => navigation.navigate('InProgressDetail')}
            />
            <ItemListFood
              image={FoodDummy4}
              label={'Latte Fate'}
              price={'450.000'}
              onPress={() => navigation.navigate('InProgressDetail')}
              type="in-progress"
              items={10}
            />
            <ItemListFood
              image={FoodDummy7}
              label={'Burger Tomato'}
              price={'IDR 190.000'}
              onPress={() => navigation.navigate('InProgressDetail')}
              type="in-progress"
              items={2}
            />
            <ItemListFood
              image={FoodDummy1}
              label={'Cherry Healthy'}
              price={'IDR 3.210.000'}
              onPress={() => navigation.navigate('InProgressDetail')}
              type="in-progress"
              items={10}
            />
          </View>
        </ScrollView>  
      );
    };

    const PastOrders = () => {
      const navigation = useNavigation();
      return(
        <ScrollView>
          <View>
            <ItemListFood
              image={MiniDummy1}
              label={'Curry Funny'}
              price={'289.000'} 
              onPress={() => navigation.navigate('PastOrdersDetail')}
              type="past-order"
              date={"Jun 12, 14:00"}
            />
            <ItemListFood
              image={FoodDummy2}
              label={'Avosalado'}
              price={'85.000'}
              onPress={() => navigation.navigate('PastOrdersDetail')}
              type="past-order"
              date={"Mei 2, 09:00"}
              status={"Cancelled"}
            />
          </View>
        </ScrollView>
      );
    };
  
    const renderScene = SceneMap({
      1: InProgress,
      2: PastOrders,
    });

const OrderTabSection = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'In Progress' },
        { key: '2', title: 'Past Orders' },
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

export default OrderTabSection