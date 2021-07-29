import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';

const IconButton = ({
  padding = 5,
  radius = 20,
  color = Colors.violetDark,
  icon,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btnView,
        {
          borderRadius: radius,
          padding: padding,
          backgroundColor: color,
        },
      ]}>
      {icon}
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  btnView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
