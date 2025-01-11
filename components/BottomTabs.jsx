import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Product from "../screens/product/Products"
import Cart from "../screens/product/Cart"
const Tab = createBottomTabNavigator();
export function BottomTabs() {
  return (
    <Tab.Navigator
    screenOptions={{
        headerShown: false
    }}
    >
        <Tab.Screen
        name="Product"
        options={{
            tabBarIcon: () => {
                <Image
                source={require("../assets/clothes-hanger.png")
                }
                style={{width: 24, height: 24}} />
            },
            tabBarActiveTintColor: 'black'
        }}
        component={Product} />
        <Tab.Screen
        options={{
            tabBarActiveTintColor: 'black',
             tabBarIcon: () => {
                <Image
                source={require("../assets/clothes-hanger.png")
                }
                style={{width: 24, height: 24}} />
            }
        }}
        name="Cart"
        component={Cart} />
    </Tab.Navigator>
  )
}