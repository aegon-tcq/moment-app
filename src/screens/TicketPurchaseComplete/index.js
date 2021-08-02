import React from 'react';
import {FlatList, StyleSheet, Text, View, ScrollView} from 'react-native';
import GradientBackground from './../../containers/GradientBackground';
import AppHeader from './../../components/Header/AppHeader';
import TicketCard from './../../components/Cards/TicketCard';
import ContainedButton from '../../components/buttons/ContainedButton';

const TicketPurchaseComplete = ({
  count = 5,
  type = 'regular',
  tickets = [0, 1, 2],
}) => {
  const handleOnScroll = event => {
    console.log(event.nativeEvent.contentOffset.x);
  };
  return (
    <GradientBackground>
      <AppHeader headerText="Payment" />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 80,
        }}>
        <View style={styles.description}>
          <Text
            style={
              styles.descriptionText
            }>{`Your tickers (${count} ${type}) were successfully \n purchased`}</Text>
        </View>
        <FlatList
          keyExtractor={item => item}
          showsHorizontalScrollIndicator={false}
          style={{
            marginVertical: 10,
          }}
          horizontal
          data={tickets}
          renderItem={({item}) => {
            return <TicketCard />;
          }}
          ListFooterComponent={() => <View style={{width: 20}}></View>}
        />
        <View style={styles.rowItem}>
          <Text
            style={{
              fontSize: 20,
              color: '#fff',
            }}>
            Send tickets to email
          </Text>
        </View>
        <ContainedButton btnText="Go to Explore Page" />
      </ScrollView>
    </GradientBackground>
  );
};

export default TicketPurchaseComplete;

const styles = StyleSheet.create({
  description: {
    marginVertical: 5,
    paddingHorizontal: 20,
  },
  descriptionText: {
    color: '#fff',
    lineHeight: 25,
    fontSize: 15,
  },
  rowItem: {
    flexDirection: 'row',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
});
