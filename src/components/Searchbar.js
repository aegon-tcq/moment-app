import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
const Searchbar = ({placeholder = 'Search events'}) => {
  return (
    <View style={styles.container}>
      <AntDesignIcon name="search1" style={styles.icon} />
      <TextInput style={styles.textInput} placeholder={placeholder} />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    top: 10,
    left: 20,
    fontSize: 30,
    color: 'black',
    zIndex: 10,
  },
  textInput: {
    fontSize: 20,
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingLeft: 65,
    paddingRight: 10,
    paddingVertical: 12,
  },
});
