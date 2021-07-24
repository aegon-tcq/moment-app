import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

function TransParentButton({btnText = 'Button Text',onPress = ()=>console.log("Pressed"),}) {
  return (
    <TouchableOpacity  onPress={onPress} style={styles.btnContainerbtnContainer}>
      <Text style={styles.buttonText}>{btnText}</Text>
    </TouchableOpacity>
  );
}

export default TransParentButton;

var styles = StyleSheet.create({
  btnContainer: {
    height: 50,
    borderRadius: 40,
  },
  buttonText: {
    fontSize: 18,
    lineHeight: 34,
    textAlign: 'center',
    color: '#287287',
  },
});
