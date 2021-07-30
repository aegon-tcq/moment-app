import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Colors from '../../constants/Colors';
const SortByButton = ({isSelected = false, text}) => {
  return (
    <TouchableOpacity
      style={[styles.default, isSelected ? styles.selected : {}]}>
      <Text
        style={[
          isSelected
            ? {
                color: '#fff',
                fontSize: 14,
              }
            : {
                color: '#4E4B66',
                fontSize: 14,
              },
        ]}>
        {text}
      </Text>
      {isSelected && (
        <AntIcon
          name="arrowup"
          style={{
            fontSize: 20,
            color: '#fff',
          }}
        />
      )}
    </TouchableOpacity>
  );
};

export default SortByButton;

const styles = StyleSheet.create({
  default: {
    flex: 1,
    margin: 3,
    padding: 10,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: Colors.violet,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
