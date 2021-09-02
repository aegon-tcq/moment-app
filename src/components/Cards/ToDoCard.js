import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Colors from '../../constants/Colors';

export default ToDoCard = ({
  title = 'TITLE',
  date = 'Friday 9:00 AM',
  borderColor = Colors.yellow,
  showLeftIcon = true,
}) => {
  return (
    <View style={styles.rowCenter}>
      {showLeftIcon ? <View style={styles.leftBox}></View> : null}
      <View
        style={[
          styles.container,
          {borderLeftColor: borderColor, width: showLeftIcon ? '80%' : '100%'},
        ]}>
        <View style={{marginLeft: '10%'}}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.rowCenter}>
            <AntDesign
              name={'clockcircleo'}
              size={15}
              color={Colors.lightGray}
            />
            <Text
              style={[
                styles.title,
                {
                  color: Colors.lightGray,
                  fontSize: 13,
                  marginLeft: 10,
                },
              ]}>
              {date}
            </Text>
          </View>
        </View>
        <AntDesign name={'arrowright'} size={30} color={borderColor} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grayscale,
    height: 80,
    borderRadius: 10,
    padding: 15,
    borderLeftWidth: 5,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'sf-ui-display-bold',
    fontSize: 16,
    lineHeight: 28,
    color: Colors.darkGray,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftBox: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary,
    marginHorizontal: 15,
  },
});
