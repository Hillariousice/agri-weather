import React from 'react'
import PresentWeather from '../screens/PresentWeather'
import IncomingWeather from '../screens/IncomingWeather'
import Farm from '../screens/Farm'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray'
        }}
        >
        <Tab.Screen
            name="PresentWeather"
            component={PresentWeather}
            options={{
            tabBarIcon: ({ focused }) => (
                <Feather
                name={'droplet'}
                size={24}
                color={focused ? 'purple' : 'blue'}
                />
            )
            }}
        />
        <Tab.Screen
            name="IncomingWeather"
            component={IncomingWeather}
            options={{
            tabBarIcon: ({ focused }) => (
                <Feather
                name={'clock'}
                size={24}
                color={focused ? 'purple' : 'brown'}
                />
            )
            }}
        />
        <Tab.Screen
            name="Farm"
            component={Farm}
            options={{
            tabBarIcon: ({ focused }) => (
                <Feather
                name={'cloud'}
                size={24}
                color={focused ? 'purple' : 'gold'}
                />
            )
            }}
        />
        </Tab.Navigator>
    )
}

export default Tabs