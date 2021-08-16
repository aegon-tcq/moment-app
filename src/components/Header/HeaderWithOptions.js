import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/dist/Feather';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import SettingsIcon from '../../assets/icons/Filter.svg';
import {useNavigation} from '@react-navigation/native';
import PopupMenu from './../PopupMenu';

const CustomButton = ({icon, onPress}) => {
  return <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>;
};

function HeaderWithOptions({headerText = 'HEADER_TEXT', headerStyle = {}}) {
  const navigation = useNavigation();
  return (
    <LinearGradient
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      colors={['#2A7E8D', '#140C56']}
      style={[styles.linearGradient, headerStyle]}>
      <View style={styles.root}>
        <CustomButton
          onPress={() => navigation.pop()}
          icon={<AntDesign name={'arrowleft'} size={30} color={'#FFF'} />}
        />
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{headerText}</Text>
        </View>
        <CustomButton
          icon={<Feather name={'more-vertical'} size={30} color={'#FFF'} />}
        />
      </View>
    </LinearGradient>
  );
}

export default HeaderWithOptions;

const styles = StyleSheet.create({
  linearGradient: {
    height: 100,
    borderBottomLeftRadius: 46,
    borderBottomRightRadius: 46,
    paddingVertical: 20,
  },
  root: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  headerText: {
    color: '#FFF',
    fontSize: 20,
    lineHeight: 23.87,
    marginLeft: 15,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
