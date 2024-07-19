import React from 'react'
import PresentWeather from '../screens/PresentWeather'
import IncomingWeather from '../screens/IncomingWeather'
import Farm from '../screens/Farm'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = ({weather}: any) => {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: { backgroundColor: 'white' },
            headerStyle:{
                backgroundColor: 'white'
            },
            headerTitleStyle:{
                fontWeight: 'bold',
                fontSize: 25,
                color: 'brown'
            }
        }}
        >
        <Tab.Screen
            name="PresentWeather"
            
            options={{
            tabBarIcon: ({ focused }) => (
                <Feather
                name={'droplet'}
                size={24}
                color={focused ? 'purple' : 'blue'}
                />
            )
            }}
        >
        {()=> <PresentWeather weatherData={weather.list[0]}/>}</Tab.Screen>
        <Tab.Screen
            name="IncomingWeather"
            options={{
            tabBarIcon: ({ focused }) => (
                <Feather
                name={'clock'}
                size={24}
                color={focused ? 'purple' : 'brown'}
                />
            )
            }}
        >
        {()=> <IncomingWeather weatherData={weather.list}/>}
        </Tab.Screen>
        <Tab.Screen
            name="Farm"
            options={{
            tabBarIcon: ({ focused }) => (
                <Feather
                name={'cloud'}
                size={24}
                color={focused ? 'purple' : 'gold'}
                />
            )
            }}
        >{()=> <Farm weatherData={weather.list}/>}
        </Tab.Screen>
        </Tab.Navigator>
    )
}

export default Tabs