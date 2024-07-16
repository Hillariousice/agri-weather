import { Feather } from "@expo/vector-icons";
import React, { FC } from "react"
import { View, Text, StyleSheet } from "react-native"
import { WeatherData } from "../utils/types";

const ListItems: FC<WeatherData> = (props) => {
    const { alerts, daily, hourly, minutely, current } = props;
    const {item, words, daiy, temp} =styles
    return (
      <View style={item}>
        <Feather name="sun" size={50} color="#A89C68" />
        <Text style={words}>{alerts[0].event}</Text>
        <Text style={daiy}>{daily[0].sunrise}</Text>
        <Text style={temp}>{hourly[0].temp}</Text>
        <Text style={words}>{minutely[0].precipitation}</Text>
        <Text style={temp}>{current.temp}</Text>
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