import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import { TextInputMask } from 'react-native-masked-text'


export default FormTextInput = ({
  type = 'TEXT',
  placeholder = 'Placeholder',
  onChange = () => {},
  value = ""
}) => {
  return (
    <View style={styles.container}>
      {type === 'TEXT' ? (
        <TextInput
          style={styles.textInput}
          placeholderTextColor={'#14142B'}
          placeholder={placeholder}
        />
      ) : (
        <TextInputMask
          type={'datetime'}
          options={{
            format: 'DD-MM-YYYY',
          }}
          style={styles.textInput}
          value={value}
          placeholder={"DD-MM-YYYY"}
          onChangeText={text => onChange(text)}
        />
        
      )}
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
});
