import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HeaderWithSearchbar from '../../components/Header/HeaderWithSearchbar';
import Categories from '../components/Categories';
import EventsForYou from './EventsForYou';
import ViewAllEventsButton from './ViewAllEventsButton';

const ExploreSearchScreen = ({navigation}) => {
  const handleNavigationTo = screenName => navigation.navigate(screenName);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderWithSearchbar
        title="Explore"
        onPressFilterBtn={() => handleNavigationTo('FilterScreen')}
      />
      <EventsForYou />
      <Categories />
      <ViewAllEventsButton />
    </View>
  );
};

export default ExploreSearchScreen;

const styles = StyleSheet.create({
  eventsView: {
    paddingLeft: 20,
    marginVertical: 20,
  },
});
