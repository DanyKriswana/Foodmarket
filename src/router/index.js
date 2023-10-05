import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";

import { BottomNavigator } from "../components/molecules";
import { CancelledOrder, FoodDetail, Home, InProgressDetail, Order, OrderSummary, PastOrdersDetail, Profile, SignIn, SignUp, SignUpAddress, SplashScreen, SuccessOrder, SuccessSignUp } from "../pages";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home"component={Home} options={{headerShown: false}}/>
            <Tab.Screen name="Order" component={Order} options={{headerShown: false}}/>
            <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
        </Tab.Navigator>
    )
}
const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="SplashScreen" 
                component={SplashScreen} 
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="SignIn" 
                component={SignIn} 
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="SignUpAddress"
                component={SignUpAddress}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="SuccessSignUp"
                component={SuccessSignUp}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="MainApp"
                component={MainApp}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Order"
                component={Order}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="FoodDetail"
                component={FoodDetail}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="OrderSummary"
                component={OrderSummary}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="SuccessOrder"
                component={SuccessOrder}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="CancelledOrder"
                component={CancelledOrder}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="InProgressDetail"
                component={InProgressDetail}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="PastOrdersDetail"
                component={PastOrdersDetail}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default Router;