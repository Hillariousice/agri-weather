import React from 'react'
import {View, Text, SafeAreaView, StyleSheet } from 'react-native'
import {Feather} from '@expo/vector-icons'
import RowText from '../components/RowText'

const PresentWeather = () =>{
    const {wrapper, temper, looks,container, wind, aptitude, press, humi, bodyRapper, details, comment}= styles
    return (
        <SafeAreaView style={wrapper}>
           <View style={container}>
            <Feather name="cloud" size={100} color="white" />
            <Text style={temper}>25°C</Text>
            <Text style={looks}>Cloudy</Text>
            <RowText    messageOne={'Wind: 5km/h'}  messageTwo={'Humidity: 50%'} messageThree={'Pressure: 1013hPa'} conStyle={aptitude} messageOneStyle={wind}
            messageTwoStyle={humi} messageThreeStylr={press}/>
            
            </View>
            <RowText messageOne={'Its cloudy'} messageTwo={'Go check on crops'} messageThree={''} conStyle={bodyRapper} messageOneStyle={details}
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