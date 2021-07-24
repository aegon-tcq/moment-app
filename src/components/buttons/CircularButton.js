import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';

function CircularButton({
  radius = 50,
  margins = {},
  bgColor = '#287287',
  textColor = '#FCFCFC',
  btnText = 'Text',
}) {
  return (
    <TouchableOpacity
      style={[
        styles.btnContainer,
        {
          height: radius * 2,
          width: radius * 2,
          borderRadius: radius,
          backgroundColor: bgColor,

        },
        margins
      ]}>
      <EvilIcons name={'image'} size={30} color={textColor} />

      <Text style={[styles.buttonText, {color: textColor}]}>{btnText}</Text>
    </TouchableOpacity>
  );
}

export default CircularButton;

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    lineHeight: 34,
    textAlign: 'center',
    color: '#287287',
  },
});
