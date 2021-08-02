import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';

const PaymentButton = ({icon, text, selected = false}) => {
  return (
    <TouchableOpacity style={selected ? styles.selected : styles.default}>
      <View
        style={{
          marginRight: 10,
        }}>
        {icon}
      </View>
      <Text
        style={{
          fontSize: 14,
          color: selected ? 'white' : Colors.darkPurple,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default PaymentButton;

const styles = StyleSheet.create({
  selected: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    marginRight: 10,
  },
  default: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: Colors.violedBg,
    marginRight: 10,
  },
});
