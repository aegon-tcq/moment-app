import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExploreIcon from '../assets/icons/tab/Explore.svg';
import EventsIcon from '../assets/icons/tab/Events.svg';
import NotifIcon from '../assets/icons/tab/Notifications.svg';
import Profile from '../assets/icons/tab/Profile.svg';
import Vendor from '../assets/icons/tab/Vendor.svg';
import ExploreSearchScreen from './../screens/ExploreSearchScreen/index';
import Colors from '../constants/Colors';
import {View, TouchableOpacity} from 'react-native';
import NotificationScreen from './../screens/NotificationScreen';
import EventStackNavigator from "./EventNavigator"

const BottomTab = createBottomTabNavigator();

export default BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={'Explore'}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.tabInactive,
        tabBarActiveBackgroundColor: 'white',
        tabBarInactiveBackgroundColor: 'white',
        // tabBarStyle: {
        //   position: 'absolute',
        //   backgroundColor: 'transparent',
        //   elevation: 0,
        //   borderTopWidth: 0,
        // },
      }}>
      <BottomTab.Screen
        name="Explore"
        component={ExploreSearchScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <ExploreIcon style={{color: color}} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <NotifIcon style={{color: color}} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Events"
        component={EventStackNavigator}
        options={{
          tabBarIcon: ({focused, color}) => (
            <EventsIcon style={{color: color}} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Vendors"
        component={ExploreSearchScreen}
        options={{
          tabBarIcon: ({focused, color}) => <Vendor style={{color: color}} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ExploreSearchScreen}
        options={{
          tabBarIcon: ({focused, color}) => <Profile style={{color: color}} />,
        }}
      />
    </BottomTab.Navigator>
  );
};
