import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import { Header, ItemListFood, ItemValue } from '../../components/molecules'
import { Buttons } from '../../components/atoms'
import { FoodDummy1 } from '../../assets/Dummy'

import { styles } from './styles'
import { globalStyles } from '../../Helpers/globalStyles'

const InProgressDetail = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header
                title={'Payment'}
                subTitle={'You deserve better meal'}
                onBack={() => {}}
            />
            <ScrollView>
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
                    <View style={styles.orderStatus}>
                        <Text style={globalStyles.text.smallTitle}>Order Status:</Text>
                        <ItemValue
                            label={'#FM209391'}
                            value={'Paid'}
                            textColor='#1ABC9C'
                        />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <View>
                        <Buttons text={'Cancel My Order'} color='#D9435E' textColor='white' onPress={() => navigation.replace('CancelledOrder')}/>
                    </View>
                </View>
            </ScrollView>
        </View>
      )
}

export default InProgressDetail