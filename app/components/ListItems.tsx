import { Feather } from "@expo/vector-icons";
import React, { FC } from "react"
import { View, Text, StyleSheet } from "react-native"
import {  WeatherItem } from "../utils/types";
import { weatherType, WeatherCondition } from "../utils/weatherTypes";


const ListItems: FC<WeatherItem> = (props) => {
    const {dt, clouds, weather, main, wind } = props;
    const {item, words, daiy, temp} =styles
    return (
      <View style={item}>
        <Feather name={weatherType[weather.main]?.icon} size={50} color="#A89C68" />
        <Text style={words}>{dt}</Text>
        <Text style={daiy}>{weather.description}</Text>
        <Text style={temp}>{main.feels_like}</Text>
        <Text style={words}>{clouds.all}</Text>
        <Text style={temp}>{wind.speed}</Text>
        
      </View>
    );
  };
const styles = StyleSheet.create({
    item:{
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'white',
        
      },
      daiy:{
        color : '#A89C68',
        fontSize: 10
      },
      words:{
        color : '#A89C68',
        fontSize: 10
      },
      temp:{
        color : '#A89C68',
        fontSize: 10
      },
     
})
export default ListItems