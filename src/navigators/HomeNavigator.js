import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ExploreSearchScreen from '../screens/ExploreSearchScreen/index';
import FilterScreen from '../screens/FilterScreen/index';
import ExploreEventSearchScreen from '../screens/ExploreEventSearchScreen';
import ExploreCategoryScreen from '../screens/ExploreCategoryScreen';
import ChangeLocationScreen from '../screens/ChangeLocationScreen';
import TabNavigator from './TabNavigator';

const HomeStack = createStackNavigator();

export default HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName={'ExploreSearchScreen'}>
      <HomeStack.Screen
        options={{headerShown: false}}
        name="test"
        component={TabNavigator}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="ExploreSearchScreen"
        component={ExploreSearchScreen}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="FilterScreen"
        component={FilterScreen}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="ExploreEventSearchScreen"
        component={ExploreEventSearchScreen}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="ExploreCategoryScreen"
        component={ExploreCategoryScreen}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="ChangeLocationScreen"
        component={ChangeLocationScreen}
      />
      
    </HomeStack.Navigator>
  );
};
