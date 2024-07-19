import React, { FC } from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList, ListRenderItem, StatusBar, Image, ImageBackground } from 'react-native';
import ListItems from '../components/ListItems';
import { WeatherItem } from '../utils/types';



const IncomingWeather = ({ weatherData }: { weatherData: WeatherItem[] }) => {
  const renderWork: ListRenderItem<WeatherItem> = ({ item }) => (
    <ListItems
      dt={item.dt}
      weather={item.weather}
      main={item.main}
      wind={item.wind}
      clouds={item.clouds}
    />
  );

  const { container, heading, pic } = styles;

  return (
    <SafeAreaView style={container}>
      <Text style={heading}>Incoming Weather</Text>
      <ImageBackground source={require('../../assets/images/hillcloud.jpg')} style={pic}>
        <FlatList
          data={weatherData}
          renderItem={renderWork}
          keyExtractor={(item) => item.dt.toString()}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#A89C68',
  },
  heading: {
    color: 'white',
    fontSize: 20,
    justifyContent: 'center',
  },
  pic: {
    flex: 1,
  },
});

export default IncomingWeather;
