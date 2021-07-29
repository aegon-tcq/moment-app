import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ChooseInterestScreen from '../screens/ChooseInterestScreen';
import CreateProfileScreen from '../screens/CreateProfileScreen';
import ExploreSearchScreen from './../screens/ExploreSearchScreen';

const LoginStack = createStackNavigator();

export default UserLoginStack = () => {
  return (
    <LoginStack.Navigator initialRouteName={'ExploreScreen'}>
      <LoginStack.Screen
        options={{headerShown: false}}
        name="LoginScreen"
        component={LoginScreen}
      />
      <LoginStack.Screen
        options={{headerShown: false}}
        name="SignUpScreen"
        component={SignUpScreen}
      />
      <LoginStack.Screen
        options={{headerShown: false}}
        name="CreateProfileScreen"
        component={CreateProfileScreen}
      />
      <LoginStack.Screen
        options={{headerShown: false}}
        name="ChooseInterestScreen"
        component={ChooseInterestScreen}
      />
      <LoginStack.Screen
        options={{headerShown: false}}
        name="ExploreScreen"
        component={ExploreSearchScreen}
      />
    </LoginStack.Navigator>
  );
};
