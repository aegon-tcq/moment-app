import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import PropTypes from 'prop-types';
import DashedLine from 'react-native-dashed-line';
import Svg, {Circle} from 'react-native-svg';
import Colors from '../../constants/Colors';

const CardSepartor = () => (
  <View
    style={{
      justifyContent: 'center',
    }}>
    <Svg
      height="70"
      width="100"
      style={{
        position: 'absolute',
        top: -27,
        left: 0,
        zIndex: 10,
      }}>
      <Circle cx="0" cy="30" r="25" fill="#2A7E8D" fillOpacity="0.98" />
    </Svg>
    <Svg
      height="70"
      width="100"
      style={{
        position: 'absolute',
        top: -27,
        right: 0,
        zIndex: 10,
      }}>
      <Circle cx="100" cy="30" r="25" fill="#140C56" fillOpacity="0.98" />
    </Svg>
    <View>
      <DashedLine
        dashLength={6}
        dashThickness={6}
        dashGap={12}
        dashColor="#140C56"
        dashStyle={{borderRadius: 5}}
      />
    </View>
  </View>
);

const TicketCard = ({}) => {
  const event = {
    name: 'Gidi Fest: Bringing It Home!',
    venue: 'Cricke Pitch,TBS,Lagos',
    date: '08/04/2021',
    time: '6.00pm',
    ticketNumber: '00067',
    type: 'Regular',
  };
  return (
    <View style={styles.ticketCard}>
      <View style={styles.ticketDetail}>
        <View style={styles.eventItem}>
          <Text style={styles.eventTitle}>Event</Text>
          <Text style={styles.titleText}>{event.name}</Text>
        </View>
        <View style={styles.eventItem}>
          <Text style={styles.eventTitle}>Venue</Text>
          <Text style={styles.description}>{event.venue}</Text>
        </View>
        <View style={styles.eventRow}>
          <View style={styles.rowItem}>
            <Text style={styles.eventTitle}>Date</Text>
            <Text style={styles.description}>{event.date}</Text>
          </View>
          <View style={styles.rowItem1}>
            <Text style={styles.eventTitle}>Time</Text>
            <Text style={styles.description}>{event.time}</Text>
          </View>
        </View>
        <View style={styles.eventRow}>
          <View style={styles.rowItem}>
            <Text style={styles.eventTitle}>Ticket Number</Text>
            <Text style={styles.description}>{event.ticketNumber}</Text>
          </View>
          <View style={styles.rowItem1}>
            <Text style={styles.eventTitle}>Ticket Type</Text>
            <Text style={styles.description}>{event.type}</Text>
          </View>
        </View>
      </View>
      <CardSepartor />
      <View style={styles.ticketFooter}>
        <Image source={require('../../assets/qrcode.png')} style={{}} />
      </View>
    </View>
  );
};

export default TicketCard;

const styles = StyleSheet.create({
  ticketCard: {
    backgroundColor: '#fff',
    height: 520,
    width: 310,
    marginLeft: 20,
    borderRadius: 10,
  },
  ticketDetail: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  ticketFooter: {
    height: 136,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventRow: {
    flexDirection: 'row',
    marginBottom: 25,
    flex: 1,
  },
  rowItem: {
    flex: 0.55,
  },
  rowItem1: {
    flex: 0.45,
  },
  eventItem: {
    marginBottom: 25,
  },
  eventTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.primary,
    marginBottom: 5,
  },
  titleText: {
    fontSize: 23,
    color: Colors.violetDarkShade,
  },
  description: {
    fontSize: 20,
    color: Colors.violetShade,
  },
});
