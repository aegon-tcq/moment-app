import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import Colors from '../../constants/Colors';

const CategoryButton = ({icon, btnStyle = {}, onPress, label, isSelected}) => {
  return (
    <View style={styles.btnView}>
      <TouchableOpacity
        style={[
          styles.btnStyle,
          {
            backgroundColor: isSelected ? Colors.violet : Colors.violedBg,
          },
          btnStyle,
        ]}
        onPress={onPress}>
        {icon}
      </TouchableOpacity>
      <Text
        style={{
          marginTop: 5,
          fontSize: 12,
          fontWeight: '500',
          color: 'black',
        }}>
        {label}
      </Text>
    </View>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  btnView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
  },
  btnStyle: {
    height: 55.5,
    width: 55.5,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.violedBg,
  },
});
