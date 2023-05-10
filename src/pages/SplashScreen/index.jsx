import React, { useEffect } from "react";
import { Text, View } from "react-native";

import {Logo} from '../../assets/Ilustration'

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('SignIn')
        }, 1500)
    }, [])
    return (
        <View style={{backgroundColor: '#FFC700', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Logo />
            <Text style={{color: '#020202', fontSize: 32, fontFamily: 'Poppins-Medium'}}>FoodMarket</Text>
        </View>
    )
}

export default SplashScreen;