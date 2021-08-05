import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import SettingsIcon from '../../assets/icons/Filter.svg';
import {useNavigation} from '@react-navigation/native';

const CustomButton = ({icon, onPress}) => {
  return <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>;
};

function TextHeader({
  headerText = 'HEADER_TEXT',
   showRight = true}) {
  const navigation = useNavigation();
  return (
    <LinearGradient
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      colors={['#2A7E8D', '#140C56']}
      style={styles.linearGradient}>
      <View style={styles.headerContainer}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', width: '80%'}}>
          <CustomButton
            onPress={() => navigation.pop()}
            icon={<AntDesign name={'arrowleft'} size={30} color={'#FFF'} />}
          />
          <Text style={styles.headerText}>{headerText}</Text>
        </View>
        {showRight && (
          <>
            <CustomButton icon={<SettingsIcon />} />
            <CustomButton
              icon={<EvilIcons name={'location'} size={30} color={'#FFF'} />}
            />
          </>
        )}
      </View>
    </LinearGradient>
  );
}

export default TextHeader;

const styles = StyleSheet.create({
  linearGradient: {
    height: 100,
    borderBottomLeftRadius: 46,
    borderBottomRightRadius: 46,
    paddingVertical: 20,
    justifyContent: 'flex-end',
  },
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
  },
});
