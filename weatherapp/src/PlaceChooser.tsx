import React from 'react';
import {Colors} from '../src/common/style';
import {View, StyleSheet, TextInput} from 'react-native';

interface PlaceChooserProps {
  callback: (place: string) => void;
}

export function PlaceChooser({callback}: PlaceChooserProps): JSX.Element {
  return (
    <View style={style.container}>
      <View style={style.mainView}>
        <TextInput
          defaultValue="City name"
          style={{...style.textInput}}
          onSubmitEditing={({nativeEvent: {text}}) => callback(text)}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    borderRadius: 5,
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  mainView: {
    backgroundColor: Colors.Mauve2,
  },
  textInput: {
    borderRadius: 5,
  },
});
