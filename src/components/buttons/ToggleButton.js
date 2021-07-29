import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import Colors from '../../constants/Colors';

const ToggleButton = ({
  labelLeft = 'labelLeft',
  labelRight = 'labelRight',
  selectedValue = 'left',
  onChangeHandler = value => {},
}) => {
  const [viewWidth, setViewWidth] = React.useState();
  const togglePosition = React.useRef(new Animated.Value(0)).current;

  function layoutEffect(event) {
    setViewWidth(event.nativeEvent.layout.width);
  }
  function moveLeft() {
    Animated.timing(togglePosition, {
      duration: 500,
      toValue: 0,
      useNativeDriver: true,
    }).start();
    onChangeHandler('left');
  }

  function moveRight() {
    Animated.timing(togglePosition, {
      duration: 500,
      toValue: viewWidth / 2,
      useNativeDriver: true,
    }).start();
    onChangeHandler('right');
  }

  return (
    <View style={[styles.togglerView]} onLayout={layoutEffect}>
      <TouchableOpacity style={[styles.left]} onPress={moveLeft}>
        <Text
          style={[
            styles.label,
            selectedValue === 'left' ? styles.toggleText : {},
          ]}>
          {labelLeft}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.right} onPress={moveRight}>
        <Text
          style={[
            styles.label,
            selectedValue === 'right' ? styles.toggleText : {},
          ]}>
          {labelRight}
        </Text>
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.toggler,
          {
            transform: [
              {
                translateX: togglePosition,
              },
            ],
          },
        ]}
      />
    </View>
  );
};

export default ToggleButton;

const styles = StyleSheet.create({
  togglerView: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: Colors.violedBg,
    position: 'relative',
    borderRadius: 30,
    maxWidth: 400,
  },
  left: {
    width: '50%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  right: {
    width: '50%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  label: {
    fontSize: 14,
    color: Colors.violetShade,
    zIndex: 10,
  },
  toggleText: {
    color: '#fff',
  },
  toggler: {
    position: 'absolute',
    height: '100%',
    width: '50%',
    backgroundColor: Colors.purple,
    borderRadius: 30,
  },
});
