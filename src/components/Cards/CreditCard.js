import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MasterCardIcon from '../../assets/icons/mastercard.svg';
import MasterCardIcon1 from '../../assets/icons/mastercard1.svg';
import Colors from '../../constants/Colors';

const CreditCard = ({variant = 'gradient'}) => {
  const isGradient = variant === 'gradient';
  return (
    <View
      style={[
        styles.creditCard,
        !isGradient && {
          borderWidth: 2,
          borderColor: '#14142B',
          borderRadius: 20,
        },
      ]}>
      {isGradient && (
        <LinearGradient
          colors={Colors.cardGradient}
          style={{
            ...StyleSheet.absoluteFillObject,
            borderRadius: 20,
          }}
        />
      )}

      {variant === 'gradient' ? <MasterCardIcon /> : <MasterCardIcon1 />}

      <Text
        style={{
          fontSize: 18,
          color: isGradient ? '#fff' : Colors.description,
        }}>
        5399 XXXX XXXX 1234
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 14,
            color: isGradient ? '#fff' : Colors.description,
            fontWeight: '700',
          }}>
          John Doe
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: isGradient ? '#fff' : Colors.description,
            fontWeight: '700',
          }}>
          10/22
        </Text>
      </View>
    </View>
  );
};

export default CreditCard;

const styles = StyleSheet.create({
  creditCard: {
    height: 150,
    width: 260,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'space-between',
    marginRight: 20,
  },
});
