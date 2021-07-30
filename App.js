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
import ExploreEventSearchScreen from './src/screens/ExploreEventSearchScreen';
import ExploreCategoryScreen from './src/screens/ExploreCategoryScreen';


const App = () => {
  const [showSplashScreen, setShowSplashScreen] = React.useState(true);

  React.useEffect(() => {
    const timeOut = setTimeout(() => {
      setShowSplashScreen(false);
    }, 2500);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);



  if (showSplashScreen) return <SplashScreen />;
  return (
    <NavigationContainer>
      <UserLoginStack />
    </NavigationContainer>
  );
};

export default App;
