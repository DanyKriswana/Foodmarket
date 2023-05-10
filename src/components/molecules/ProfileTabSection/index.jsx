import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, Text, useWindowDimensions, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';


import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4, FoodDummy7, FoodDummy8, FoodDummy9, MiniDummy1 } from '../../../assets/Dummy';
import ItemListFood from '../ItemListFood';
import ItemListMenu from '../ItemListMenu';
import { Gap } from '../../atoms';


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
  
    const Account = () => {
      const navigation = useNavigation();
      return(
        <View>
          <Gap height={6}/>
          <ItemListMenu label={'Edit Profile'}/>
          <ItemListMenu label={'Home Address'} />
          <ItemListMenu label={'Security'} />
          <ItemListMenu label={'Payments'} />
          <Gap height={6}/>
        </View>
      );
    };

    const FoodMarket = () => {
      const navigation = useNavigation();
      return(
        <View>
          <Gap height={6}/>
          <ItemListMenu label={'Rate App'}/>
          <ItemListMenu label={'Help Center'} />
          <ItemListMenu label={'Privacy & Policy'} />
          <ItemListMenu label={'Terms & Conditions'} />
          <Gap height={6}/>
        </View>
      );
    };
  
    const renderScene = SceneMap({
      1: Account,
      2: FoodMarket,
    });

const ProfileTabSection = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'Account' },
        { key: '2', title: 'FoodMarket' },
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

export default ProfileTabSection