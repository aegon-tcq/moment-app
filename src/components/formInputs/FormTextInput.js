import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

export default FormTextInput = ({
  placeholder = 'Placeholder',
  value = '',
  name = '',
  inputTextStyle = {},
  inputContainerStyle = {},
  onChangeText,
}) => {
  return (
    <View style={[styles.container, inputContainerStyle]}>
      <TextInput
        secureTextEntry={name === 'password'}
        style={[styles.textInput, inputTextStyle]}
        placeholderTextColor={'#14142B'}
        placeholder={placeholder}
        defaultValue={value}
        onChangeText={txt => onChangeText(name, txt)}
      />
    </View>
  );
};

export const TextArea = ({
  placeholder = 'Placeholder',
  value = '',
  name = '',
  inputTextStyle = {},
  inputContainerStyle = {},
  onChangeText,
}) => {
  return (
    <View style={[styles.container1, inputContainerStyle]}>
      <TextInput
        secureTextEntry={name === 'password'}
        style={[styles.textInput1, inputTextStyle]}
        placeholderTextColor={'#14142B'}
        placeholder={placeholder}
        defaultValue={value}
        onChangeText={txt => onChangeText(name, txt)}
        multiline
        numOfLines={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFF0F6',
    height: 50,
    borderRadius: 15,
    marginVertical: 10,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 20,
    fontSize: 16,
    lineHeight: 28,
    fontWeight: '500',
  },
  container1: {
    backgroundColor: '#EFF0F6',
    borderRadius: 15,
    marginVertical: 10,
    height: 100,
  },
  textInput1: {
    flex: 1,
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: '500',
  },
});
