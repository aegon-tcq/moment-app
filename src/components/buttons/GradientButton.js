import React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function GradientButton({
  colors = ['#2A7E8D', '#140C56'],
  onPress = () => console.log('Pressed'),
  btnText = 'Button Text',
  btnStyles = {},
  loading = false,
}) {
  return (
    <LinearGradient
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      colors={colors}
      style={[styles.linearGradient, btnStyles]}>
      <TouchableOpacity
        onPress={onPress}
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {loading ? (
          <ActivityIndicator size="small" color="#F5F5F5" />
        ) : (
          <Text style={styles.buttonText}>{btnText}</Text>
        )}
      </TouchableOpacity>
    </LinearGradient>
  );
}

export default GradientButton;
var styles = StyleSheet.create({
  linearGradient: {
    height: 50,
    borderRadius: 40,
    margin: 20,
  },
  buttonText: {
    fontSize: 18,
    lineHeight: 34,
    textAlign: 'center',
    color: '#F7F7FC',
  },
});
