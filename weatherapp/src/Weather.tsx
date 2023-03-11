import React, {useEffect, useState} from 'react';
import {WeatherItem} from '../src/WeatherItem';
import {Pressable, FlatList, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../src/common/style';

interface WeatherProps {
  places: Place[];
}
export function Weather({places}: WeatherProps): JSX.Element {
  const [fetched, setFetched] = useState(false);
  const [refetch, setRefetch] = useState(false);

  return (
    <View style={{...styles.mainView}}>
      <FlatList
        style={styles.list}
        data={places}
        ItemSeparatorComponent={() => <View style={{height: 5}} />}
        renderItem={({item}) => <WeatherItem place={item} />}
      />
      {/* {!fetched ? ( */}
      {/*   <WeatherDisplay place={places} /> */}
      {/* ) : isLoading ? ( */}
      {/*   <LoadingScreen /> */}
      {/* ) : ( */}
      {/*   <WeatherDisplay place={places} data={data} /> */}
      {/* )} */}
      <Pressable
        style={{...styles.getButton}}
        onPress={() => {
          setFetched(true);
          setRefetch(!refetch);
        }}
        /* disabled={isLoading}> */
      >
        <Text style={{}}>Add</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 5,
  },

  getButton: {
    bottom: 40,
    right: 20,
    height: 50,
    width: 50,
    alignSelf: 'center',
    backgroundColor: Colors.Mauve,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});
