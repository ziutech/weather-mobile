import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../src/common/style';

interface WeatherRendererProps {
  data?: WeatherData;
  place: Place;
}

export function WeatherDisplay({
  data,
  place,
}: WeatherRendererProps): JSX.Element {
  if (data === undefined) {
    return <Text />;
  }
  return (
    <View style={style.item}>
      <View style={style.textDescription}>
        <Text>{place.name}</Text>
        <Text>{data.weather[0].description}</Text>
      </View>
      <Image
        style={style.icon}
        source={{
          uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  item: {
    backgroundColor: Colors.Mauve,
    borderColor: Colors.Mauve,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textDescription: {},
  icon: {
    width: 50,
    height: 50,
  },
});
