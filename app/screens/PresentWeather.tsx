import React from 'react'
import {View, Text, SafeAreaView, StyleSheet } from 'react-native'
import {Feather} from '@expo/vector-icons'
import RowText from '../components/RowText'
import { WeatherCondition, weatherType } from '../utils/weatherTypes'
import { PresentWeatherProps } from '../utils/types'

const PresentWeather = ({ weatherData }: { weatherData: PresentWeatherProps }) =>{
    const { main: { temp, feels_like, temp_max, temp_min, pressure,humidity }, weather } = weatherData
    const weatherCondition = weather[0]?.main as WeatherCondition
    const {wrapper, temper, looks,container, wind, aptitude, press, humi, bodyRapper, details, comment}= styles
    return (
        <SafeAreaView style={[wrapper,
        {backgroundColor: weatherType[weatherCondition]?.backgroundColor}]}>
           <View style={container}>
            <Feather name={weatherType[weatherCondition]?.icon}size={100} color="white" />
            <Text style={temper}>{`${temp}°`}</Text>
            <Text style={looks}>{`Feels like: ${feels_like}°`}</Text>
            <RowText    messageOne={`High: ${temp_max}° `}  messageTwo={`Low: ${temp_min}°`}messageThree={`Pressure: ${pressure}`} conStyle={aptitude} messageOneStyle={wind}
            messageTwoStyle={humi} messageThreeStylr={press}/>
            
            </View>
            <RowText messageOne={weather[0]?.description} messageTwo={weather[0]?.description} messageThree={`Humidity:${humidity}`} conStyle={bodyRapper} messageOneStyle={details}
            messageTwoStyle={comment}/> 
                     
        </SafeAreaView>
      
    )
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'purple',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    temper: {
        color: 'white',
        fontSize: 20 
    },
   looks: {
        color: 'white',
        fontSize: 25
    },
    humi:{
        color: 'white',
        fontSize: 15,
        paddingLeft:10

    },
    wind:{
        color: 'white',
        fontSize: 15,
        paddingLeft:10
    },
    press:{
        color: 'white',
        fontSize: 15,
        paddingLeft:10
    },
    aptitude:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    bodyRapper:{
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 20,
        top: 20
        
    },
    details:{
        color: 'white',
        fontSize: 15
    },
    comment:{
        color: 'white',
        fontSize: 15
    }

})
export default PresentWeather