import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

export default FormInputWithTitle = ({
  title = 'Title',
  placeholder = 'Placeholder',
}) => {
  return (
    <View style={styles.container} >
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholderTextColor={'#A0A3BD'}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        height:80,
        marginTop:10
    },
    inputContainer: {
    backgroundColor: '#EFF0F6',
    height: 50,
    borderRadius: 15,
    marginVertical: 10,
  },
  titleText: {
    fontSize: 13,
    lineHeight: 22,
    color: '#14142B',
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 20,
    fontSize: 16,
    lineHeight: 28,
    fontWeight: '500',
  },
});
