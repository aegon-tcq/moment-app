import React, {useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GradientButton from '../../components/buttons/GradientButton';
import FormTextInput from '../../components/formInputs/FormTextInput';
import Colors from '../../constants/Colors';
import Link from '../../assets/icons/Link.svg';

export default function ContributionBottomSheet({
  onPress = () => {},
  title = 'Title',
  cash = false,
  description = 'Children of the sun, see your time has just begun, searching for your ways, through adventures every day',
}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
      }}>
      <Text style={[styles.text, {textAlign: 'center', fontWeight: 'bold'}]}>
        {title}
      </Text>
      <Text style={[styles.text, {fontSize: 16}]}>{description}</Text>
      {!cash ? (
        <View>
          <Text
            style={[
              styles.text,
              {fontFamily: 'sf-ui-display-bold-58646a511e3d9'},
            ]}>
            N185,000.00
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: 50,
              justifyContent: 'space-between',
            }}>
            <Text
              style={[
                styles.amountText,
                {color: Colors.primary, marginBottom: 10},
              ]}>
              Link
            </Text>
            <Link />
          </View>
          <Text style={styles.amountText}>
            Enter an amount between N1,000 - N163,000
          </Text>
        </View>
      ) : null}
      <FormTextInput
        inputContainerStyle={{width: '100%', marginTop: 0}}
        inputTextStyle={{textAlign: 'center'}}
        placeholder={'Enter Donation Amount'}
      />
      <GradientButton
        btnStyles={{margin: 0, marginVertical: 10}}
        onPress={onPress}
        btnText={'Make Contribution'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'sf-ui-display-light-58646b33e0551',
    marginVertical: 10,
    fontSize: 24,
  },
  amountText: {
    fontFamily: 'sf-ui-display-light-58646b33e0551',
    fontSize: 13,
    color: Colors.violetShade,
  },
});
