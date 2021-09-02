import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import SettingsIcon from '../../assets/icons/Filter.svg';
import {useNavigation} from '@react-navigation/native';
import PopupMenu from './../PopupMenu';

const CustomButton = ({icon, onPress}) => {
  return <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>;
};

function TextHeader({
  headerText = 'HEADER_TEXT',
  showBackArrow = true,
  showLocationIcon = true,
  showRight = true,
  rightIcon ,
  headerStyle = {},
  sortItems = [],
  showPopup = false,
  selectedItem,
  menuIcon = null,
}) {
  const navigation = useNavigation();
  return (
    <LinearGradient
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      colors={['#2A7E8D', '#140C56']}
      style={[styles.linearGradient, headerStyle]}>
      <View style={styles.headerContainer}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', width: '80%'}}>
          {showBackArrow && (
            <CustomButton
              onPress={() => navigation.pop()}
              icon={<AntDesign name={'arrowleft'} size={30} color={'#FFF'} />}
            />
          )}
          <Text style={styles.headerText}>{headerText}</Text>
        </View>
        {showRight && !showPopup && (
         rightIcon ? rightIcon : <>
            <CustomButton icon={<SettingsIcon />} />
            {showLocationIcon ? (
              <CustomButton
                icon={<EvilIcons name={'location'} size={30} color={'#FFF'} />}
              />
            ) : null}
          </>
        )}
        {showPopup && sortItems.length > 0 && (
          <PopupMenu
            anchor={menuIcon ? menuIcon : <SettingsIcon />}
            items={sortItems}
            selectedItem={selectedItem}
          />
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
    fontFamily:"sf-ui-display-heavy",
    lineHeight: 23.87,
    marginLeft: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginRight: 20,
  },
});
