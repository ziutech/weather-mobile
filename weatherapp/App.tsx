import React, {useState} from 'react';
/* import {PlaceChooser} from './src/PlaceChooser'; */
import {
  Pressable,
  Text,
  FlatList,
  Dimensions,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {PlaceChooser} from './src/PlaceChooser';
import {WeatherItem} from './src/WeatherItem';
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [places, setPlaces] = useState<Place[]>([
    {name: 'London'},
    {name: 'Warsaw'},
    {name: 'New York'},
  ]);

  const [isAddingPlace, setIsAddingPlace] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={{...backgroundStyle}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
          ...styles.container,
        }}>
        <FlatList
          style={styles.list}
          data={places}
          ItemSeparatorComponent={() => <View style={{height: 5}} />}
          renderItem={({item}) => <WeatherItem place={item} />}
        />
        <Pressable
          style={{...styles.getButton}}
          onPress={() => {
            setIsAddingPlace(true);
          }}
          disabled={isAddingPlace}>
          <Text style={{}}>Add</Text>
        </Pressable>
        {isAddingPlace ? (
          <PlaceChooser
            callback={text => setPlaces([...places, {name: text}])}
          />
        ) : (
          ''
        )}
      </View>
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

  container: {
    height: Dimensions.get('window').height,
  },
});

export default App;
