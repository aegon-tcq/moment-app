import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../constants/Colors';
import TextHeader from './../../components/Header/TextHeader';
import {getIconsByName} from './getIcons';
import PaymentButton from './PaymentButton';
import GradientButton from './../../components/buttons/GradientButton';
import PlusCircle from '../../assets/icons/PlusCircle.svg';
import CreditCard from '../../components/Cards/CreditCard';
import TicketsListScreen from '../TicketsListScreen';
const TicketPurchasePay = ({
  navigation
}) => {
  const paymentOptions = [
    {
      key: 0,
      name: 'Card Payment',
      icon: 'card',
    },
    {
      key: 1,
      name: 'Apple Pay',
      icon: 'apple',
    },
    {
      key: 2,
      name: 'PayPal',
      icon: 'paypal',
    },
  ];

  const _renderSelectPayment = () => (
    <View style={styles.selectPayment}>
      <Text
        style={{
          fontSize: 15,
          fontWeight: '700',
          color: 'black',
        }}>
        Select Your Payment
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          marginVertical: 10,
        }}>
        {paymentOptions.map(item => {
          return (
            <PaymentButton
              text={item.name}
              icon={
                item.key === 0
                  ? getIconsByName(item.icon)
                  : getIconsByName(item.icon, Colors.darkPurple)
              }
              selected={item.key === 0}
            />
          );
        })}
      </ScrollView>
    </View>
  );

  const _renderFooterArea = (navigation,title) => (
    <View>
      <GradientButton
        btnText={title}
        btnStyles={{
          marginVertical: 5,
          height: 55,
        }}
        onPress={()=>navigation.navigate('TicketPurchaseComplete')}
      />
    </View>
  );

  const _renderAddPaymentBtn = () => (
    <TouchableOpacity style={styles.paymentMethodBtn}>
      <Text style={styles.btnText}>Add New Payment Method</Text>
      <PlusCircle />
    </TouchableOpacity>
  );

  const _renderBuyerDetails = () => (
    <View style={styles.buyerDetails}>
      <Text style={styles.bTitle}>Buyer Details</Text>
      <View style={styles.jumbotron}>
        <Text style={styles.name}>Mohammed James Wang</Text>
        <Text style={styles.age}>25 Years Old</Text>
      </View>
    </View>
  );
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <TextHeader headerText="Payment" showRight={false} />
      <View style={styles.containerView}>
        <ScrollView>
          {_renderSelectPayment()}
          <View style={{paddingLeft: 20, marginBottom: 20}}>
            <ScrollView horizontal>
              {[0, 1, 2].map((item, index) => {
                const variants = ['gradient', 'outlined'];
                return <CreditCard variant={variants[index % 2]} />;
              })}
            </ScrollView>
          </View>

          {_renderAddPaymentBtn()}
          {_renderBuyerDetails()}
          <View style={styles.disclaimerView}>
            <Text style={styles.disclaimer}>
              Disclaimer: Thundercats are on the move, Thundercats are loose.
              Feel the magic, hear the roar, Thundercats are loose.
            </Text>
          </View>
        </ScrollView>
      </View>
      {_renderFooterArea(navigation,"Pay N50,000")}
    </View>
  );
};

export default TicketPurchasePay;

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
  selectPayment: {
    paddingLeft: 20,
    marginVertical: 15,
  },
  buyerDetails: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  bTitle: {
    fontSize: 16,
    color: '#A0A3BD',
    marginBottom: 15,
  },
  jumbotron: {
    backgroundColor: Colors.grayLight,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  paymentMethodBtn: {
    marginHorizontal: 20,
    paddingHorizontal: 20,
    backgroundColor: Colors.grayLight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    height: 58,
    marginVertical: 15,
  },
  btnText: {
    color: Colors.violetDarkShade,
    fontSize: 17,
    fontWeight: '700',
  },
  name: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
  },
  age: {
    color: '#4E4B66',
    fontSize: 14,
  },
  disclaimerView: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  disclaimer: {
    color: Colors.description,
    lineHeight: 24,
    fontWeight: '500',
    fontSize: 15,
  },
});
