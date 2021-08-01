import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const ContainedButton = ({
  btnText = 'button Text',
  textColor = 'purple',
  btnColor = 'white',
  btnStyle = {},
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.btn,
        backgroundColor: btnColor,
        ...btnStyle,
      }}>
      <Text
        style={{
          ...styles.text,
          color: textColor,
        }}>
        {btnText}
      </Text>
    </TouchableOpacity>
  );
};

export default ContainedButton;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 40,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 18,
  },
});
