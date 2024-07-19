import React from "react"
import {View, SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar } from "react-native"
import { Feather } from "@expo/vector-icons"
import IconText from "../components/IconText"
import { WeatherItem } from "../utils/types"

const Farm = ({weatherData}:{weatherData: WeatherItem}) =>{
const {main,dt,weather, wind} =weatherData
    const {container, imag, land, space, landspace, polWrap, polText, duskWrap, duskText, rowLayout} = styles
 return (
<SafeAreaView style={container}>
    <ImageBackground source={require('../../assets/images/rice-terraces.jpg')} style={imag}>
    <Text style={[land,landspace]}>{main.feels_like}</Text>
    <Text style={[space, landspace]}>{dt}</Text>
    <Text style={[space, landspace]}>{wind.speed}</Text>
    <View style={[polWrap, rowLayout]}>
        <IconText iconName={'map'} iconColor={'white'} textBody={weather.icon} textBodyStyles={polText}/>  
        </View>
    <View style={[duskWrap,rowLayout]}>
        <IconText iconName={'sunrise'} iconColor={'white'} textBody={weather.description} textBodyStyles={duskText}/> 
        <IconText iconName={'sunset'} iconColor={'white'} textBody={weather.description} textBodyStyles={duskText}/> 
        </View>
  
    </ImageBackground>
</SafeAreaView>
 )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: StatusBar.currentHeight || 0,
    },
    imag:{
        flex: 1, 
        height: 1000,
        width: 1000
    },
    land:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    space:{
        
        fontSize: 10,
        
    },
    landspace:{
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    polWrap:{
        justifyContent: 'center',
        marginTop: 20
    },
    polText:{
        fontSize: 10,
        marginLeft: 7.5,
     
    },
    duskWrap:{
        justifyContent: 'space-around',
        marginTop: 30
    },
    duskText:{
        fontSize: 10,
        marginLeft: 7.5,
      
    },
    rowLayout:{
        flexDirection: 'row',
        alignItems: 'center',
    }
}) 

export default Farm 