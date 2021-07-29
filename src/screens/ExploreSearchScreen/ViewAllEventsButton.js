import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Colors from '../../constants/Colors';
const ViewAllEventsButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '700',
          color: Colors.green,
        }}>
        View All Events
      </Text>
      <AntIcon
        name="arrowright"
        style={{
          fontSize: 25,
          color: Colors.green,
        }}
      />
    </TouchableOpacity>
  );
};

export default ViewAllEventsButton;

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 25,
    marginVertical: 20,
    backgroundColor: Colors.greenLight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 10,
  },
});
