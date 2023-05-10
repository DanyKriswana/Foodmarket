import React from 'react'
import { Text, View } from 'react-native'

import { globalStyles } from '../../Helpers/globalStyles'
import { styles } from './style'

import { FoodDummy1 } from '../../assets/Dummy'

import { Buttons } from '../../components/atoms'
import { Header, ItemListFood, ItemValue } from '../../components/molecules'

const OrderSummary = ({navigation}) => {
  return (
    <View style={styles.page}>
        <Header
            title={'Payment'}
            subTitle={'You deserve better meal'}
            onBack={() => {}}
        />
        <View style={styles.mainContent}>
            <View style={styles.itemContainer}>
                <Text style={globalStyles.text.smallTitle}>Item Ordered</Text>
                <View style={{marginHorizontal: -24}}>
                    <ItemListFood
                        image={FoodDummy1}
                        label={'Cherry Healthy'}
                        price={'IDR 289.000'}
                        items={14}
                        type="order-summary"
                    />
                </View>
                <Text style={globalStyles.text.smallTitle}>Details Transaction</Text>
                <ItemValue
                    label={'Cherry Healthy'}
                    value={'IDR 18.390.000'}
                />
                <ItemValue
                    label={'Driver'}
                    value={'IDR 50.000'}
                />
                <ItemValue
                    label={'Tax 10%'}
                    value={'IDR 1.800.390'}
                />
                <ItemValue
                    label={'Total Price'}
                    value={'IDR 390.803.000'} textColor='#1ABC9C'
                />
            </View>
            <View style={styles.deliveryContainer}>
                <Text style={globalStyles.text.smallTitle}>Delivery to:</Text>
                <ItemValue
                    label={'Name'}
                    value={'Napoleon Bonaparte'}
                />
                <ItemValue
                    label={'Phone No.'}
                    value={'0869 1234 6969'}
                />
                <ItemValue
                    label={'Address'}
                    value={'Jl. Antartika Pasifik'}
                />
                <ItemValue
                    label={'House No.'}
                    value={'A24'}
                />
                <ItemValue
                    label={'City'}
                    value={'Wonderland'}
                />
            </View>
        </View>
        <View style={styles.buttonContainer}>
            <View>
                <Buttons text={'Checkout Now'} onPress={() => navigation.replace('SuccessOrder')}/>
            </View>
        </View>
    </View>
  )
}

export default OrderSummary