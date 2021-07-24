import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

export default FormTextInput = ({placeholder = 'Placeholder'}) => {
  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.textInput} 
      placeholderTextColor={"#14142B"}
      placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFF0F6',
    height: 50,
    borderRadius: 15,
    marginVertical:10
  },
  textInput: {
    flex: 1,
    paddingHorizontal:20,
    fontSize:16,
    lineHeight:28,
    fontWeight:'500'
  },
});
