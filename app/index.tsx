import React, {useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Tabs from './components/Tabs'
import { ActivityIndicator, View, StyleSheet,Text } from 'react-native'
import { useGetWeather } from './hooks/useGetWeather'
import ErrorItem from './components/ErrorItem'


const Page = () => {
  const [loading, errorMsg, weather] = useGetWeather()
 
  console.log(loading, errorMsg, weather)
  if(weather && weather.list && !loading){
    return (
      <NavigationContainer independent={true}>
       <Tabs weather={weather}/>
       </NavigationContainer>
    )
  }
 
    return (
      <View style={styles.container}>
      {errorMsg ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={'large'} color={'purple'} />
      )}
    </View>
      )
  } 
  

const styles = StyleSheet.create({
container:{
  flex: 1,
  justifyContent: 'center',
}
})
export default Page
