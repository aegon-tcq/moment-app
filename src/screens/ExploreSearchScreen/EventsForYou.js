import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Colors from '../../constants/Colors';
import EventCard from '../../components/Cards/EventCard';
import IconButton from './../../components/buttons/IconButton';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const EventsForYou = ({onPressAllEvent}) => {
  const events = [
    {
      key: 0,
      eventName: 'Pool Party',
      date: '08 FEB,2021',
      time: '14:00',
      place: '26B Forest Hill Drive',
      image: require('../../assets/posters/image.jpg'),
    },
    {
      key: 1,
      eventName: 'The Feed',
      date: '08 FEB,2021',
      time: '16:00',
      place: '2The House,Hill Drive',
      image: require('../../assets/posters/image1.jpg'),
    },
  ];
  return (
    <View style={styles.eventsView}>
      <View style={styles.flexRow}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: Colors.violetShade,
            marginBottom: 5,
          }}>
          Events For You
        </Text>
        <IconButton
          onPress={onPressAllEvent}
          icon={
            <EntypoIcon
              name="chevron-right"
              style={{
                fontSize: 16,
                color: '#fff',
              }}
            />
          }
        />
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={events}
        renderItem={({item}) => {
          return <EventCard {...item} />;
        }}
      />
    </View>
  );
};

export default EventsForYou;

const styles = StyleSheet.create({
  eventsView: {
    paddingLeft: 20,
    marginVertical: 10,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 4,
    paddingRight: 20,
  },
});
