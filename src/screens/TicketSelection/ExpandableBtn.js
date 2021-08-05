import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../constants/Colors';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import IncrementDecrement from './IncrementDecrement';

export default ExpandableBtn = ({
  text = 'BTN_TEXT',
  description = 'These are basic entry tickets. You get access to the venue',
  price = 'N50,000',
  ticket = true,
}) => {
  const [expand, setExpand] = React.useState(false);

  return (
    <View
      style={[
        styles.container,
        {
          borderWidth: expand ? 2 : 0,
        },
      ]}>
      <View style={styles.topcontainer}>
        <Text style={styles.text}>{text}</Text>

        <TouchableOpacity onPress={() => setExpand(!expand)}>
          {expand ? (
            <Octicons name={'dash'} size={30} color={Colors.violetShade} />
          ) : (
            <Ionicons name={'add-sharp'} size={30} color={Colors.violetShade} />
          )}
        </TouchableOpacity>
      </View>

      {expand ? (
        <View style={{paddingVertical: 10}}>
          <Text
            style={[
              styles.text,
              {fontSize: 14, color: Colors.violetDarkShade},
            ]}>
            {description}
          </Text>
          {ticket ? (
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <IncrementDecrement />
              <Text style={styles.priceText}> {price} </Text>
            </View>
          ) : null}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grayLight,
    borderRadius: 13,
    paddingVertical: 18,
    paddingHorizontal: 21,
    marginVertical: 10,
    width: '100%',
  },
  topcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  text: {
    fontSize: 16,
    lineHeight: 28,
    color: '#14142B',
    fontFamily: 'sf-ui-display-medium-58646be638f96',
  },
  priceText: {
    fontSize: 24,
    lineHeight: 32,
    color: '#14142B',
    fontFamily: 'sf-ui-display-semibold-58646eddcae92',
  },
});
