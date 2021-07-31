/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import UserLoginStack from './src/navigators/UserLoginStack';
import SplashScreen from './src/screens/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import HomeStackNavigator from './src/navigators/HomeNavigator';

const App = () => {
  const user = useSelector(state => state.userState);
  const [showSplashScreen, setShowSplashScreen] = React.useState(true);

  React.useEffect(() => {
    console.log(user === {},user)
    const timeOut = setTimeout(() => {
      setShowSplashScreen(false);
    }, 2500);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  if (showSplashScreen) return <SplashScreen />;
  if (user == {})
    return (
      <NavigationContainer>
        <UserLoginStack />
      </NavigationContainer>
    );
  else return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
};

export default App;
