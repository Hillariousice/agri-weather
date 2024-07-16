import React from 'react'
import PresentWeather from './screens/PresentWeather'
import IncomingWeather from './screens/IncomingWeather'
import Farm from './screens/Farm'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import Tabs from './components/Tabs'
const Tab = createBottomTabNavigator()
const Page = () => {
  return (
    <NavigationContainer independent={true}>
     <Tabs/>
    </NavigationContainer>
  )
}

export default Page
