import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Colors from '../../constants/Colors';

export default TransParentHeader = ({
  showLeftBtn = true,
  showRightBtn = true,
  title = null,
  customStyles = {},
}) => {
  return (
    <View
      style={{
        ...customStyles,
        flexDirection: 'row',
        justifyContent:  'space-between',
        alignItems: 'center',
        padding: 20,
        width: '100%',
        zIndex: 1,
      }}>
      {showLeftBtn ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name={'arrowleft'} size={30} color={'#FFF'} />
        </TouchableOpacity>
      ) : <Text></Text>}
      <Text
        style={{
          fontSize: 24,
          color: Colors.white,
          fontFamily: 'sf-ui-display-medium-58646be638f96',
        }}>
        {title}
      </Text>
      {showRightBtn ? (
        <TouchableOpacity onPress={() => console.log('Pressed')}>
          <AntDesign name={'hearto'} size={30} color={'#FFF'} />
        </TouchableOpacity>
      ) : <Text></Text>}
    </View>
  );
};
