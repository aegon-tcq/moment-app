import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../constants/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';

const GradientBackground = props => {
  return (
    <LinearGradient
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      colors={Colors.gradient}
      style={{
        flex: 1,
        ...StyleSheet.absoluteFillObject,
      }}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <SafeAreaView>{props.children}</SafeAreaView>
    </LinearGradient>
  );
};

export default GradientBackground;
