import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TabBar from '@mindinventory/react-native-tab-bar-interaction';
const TabNavigator = () => {
  return (
    <TabBar bgNavBar="white" bgNavBarSelector="white" stroke="skyblue">
      <TabBar.Item
        icon={require('../assets/glassIcon.jpg')}
        selectedIcon={require('../assets/glassIcon.jpg')}
        title="Tab1"
        screenBackgroundColor={{backgroundColor: '#008080'}}>
        <View>{/*Page Content*/}</View>
      </TabBar.Item>
      <TabBar.Item
        icon={require('../assets/glassIcon.jpg')}
        selectedIcon={require('../assets/glassIcon.jpg')}
        title="Tab2"
        screenBackgroundColor={{backgroundColor: '#F08080'}}>
        <View>{/*Page Content*/}</View>
      </TabBar.Item>
      <TabBar.Item
        icon={require('../assets/glassIcon.jpg')}
        selectedIcon={require('../assets/glassIcon.jpg')}
        title="Tab3"
        screenBackgroundColor={{backgroundColor: '#485d72'}}>
        <View>{/*Page Content*/}</View>
      </TabBar.Item>
      <TabBar.Item
        icon={require('../assets/glassIcon.jpg')}
        selectedIcon={require('../assets/glassIcon.jpg')}
        title="Tab4"
        screenBackgroundColor={{backgroundColor: '#485d72'}}>
        <View>{/*Page Content*/}</View>
      </TabBar.Item>
      <TabBar.Item
        icon={require('../assets/glassIcon.jpg')}
        selectedIcon={require('../assets/glassIcon.jpg')}
        title="Tab5"
        screenBackgroundColor={{backgroundColor: '#485d72'}}>
        <View>{/*Page Content*/}</View>
      </TabBar.Item>
    </TabBar>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
