import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  Animated,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import TransParentHeader from './Header/TransParentHeader';
import {ExpandingDot} from 'react-native-animated-pagination-dots';
import Colors from '../constants/Colors';

const windowWidth = Dimensions.get('window').width;

export default Crousel = ({
  noOfSlides = 3,
  customStyles = {},
  renderChildItem = null,
  showHeader = true,
}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View
      style={{
        ...customStyles,
        height: 250,
        width: windowWidth * 0.9,
      }}>
      {showHeader ? (
        <TransParentHeader
          customStyles={{
            position: 'absolute',
          }}
          title={'Event Dashboard'}
        />
      ) : null}

      <View style={{height: '100%', zIndex: -1}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{flex: 1}}
          data={[...Array(noOfSlides).keys()]}
          key={item => item.toString()}
          renderItem={() => renderChildItem}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          pagingEnabled
          horizontal
          decelerationRate={'fast'}
          scrollEventThrottle={16}
        />
      </View>
      <ExpandingDot
        data={[...Array(noOfSlides).keys()]}
        expandingDotWidth={30}
        scrollX={scrollX}
        inActiveDotOpacity={0.6}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 5,
        }}
        activeDotColor={Colors.primary}
        inActiveDotColor={Colors.grayscale}
        containerStyle={{
          top: 220,
        }}
      />
    </View>
  );
};
