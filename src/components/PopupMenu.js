import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Colors from '../constants/Colors';

const PopupMenu = ({anchor, selectedItem, items = [], textStyle = {}}) => {
  return (
    <View>
      <Menu>
        <MenuTrigger
          text=""
          triggerOuterWrapper={{
            backgroundColor: 'red',
          }}>
          {anchor}
        </MenuTrigger>
        <MenuOptions
          customStyles={{
            optionWrapper: {borderRadius: 15},
            optionText: styles.text,
          }}>
          {items.map((item, index) => {
            return (
              <MenuOption
                onSelect={item.onPress}
                key={'menu' + index}
                style={styles.menuItem}>
                <Text
                  style={[
                    styles.textStyle,
                    textStyle,
                    {
                      color:
                        selectedItem === item.label ? Colors.primary : 'black',
                    },
                  ]}>
                  {item.label}
                </Text>
              </MenuOption>
            );
          })}
        </MenuOptions>
      </Menu>
    </View>
  );
};

export default PopupMenu;

const styles = StyleSheet.create({
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  textStyle: {
    fontSize: 16,
    color: 'black',
  },
});
