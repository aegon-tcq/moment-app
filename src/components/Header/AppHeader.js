import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const CustomButton = ({icon, onPress}) => {
  return <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>;
};

function AppHeader({headerText = 'HEADER_TEXT'}) {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center', width: '80%'}}>
        <CustomButton
          onPress={() => navigation.pop()}
          icon={<AntDesign name={'arrowleft'} size={30} color={'#FFF'} />}
        />
        <Text style={styles.headerText}>{headerText}</Text>
      </View>
    </View>
  );
}

export default AppHeader;

const styles = StyleSheet.create({
  headerText: {
    color: '#FFF',
    fontSize: 20,
    lineHeight: 23.87,
    marginLeft: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
