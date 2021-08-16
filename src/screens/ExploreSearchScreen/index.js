import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import HeaderWithSearchbar from '../../components/Header/HeaderWithSearchbar';
import Categories from '../components/Categories';
import EventsForYou from './EventsForYou';
import NearbySection from './NearbySection';
import ViewAllEventsButton from './ViewAllEventsButton';
import CreateEventBtn from '../../components/buttons/CreateEventBtn';

const ExploreSearchScreen = ({navigation}) => {
  const handleNavigationTo = screenName => navigation.navigate(screenName);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderWithSearchbar
        title="Explore"
        onPressFilterBtn={() => handleNavigationTo('FilterScreen')}
      />
      <ScrollView>
        <EventsForYou
          onPressAllEvent={() => handleNavigationTo('ExploreEventSearchScreen')}
        />
        <Categories />
        <ViewAllEventsButton />
        
        <NearbySection navigation={navigation} />
      </ScrollView>
      <CreateEventBtn onPress={()=>handleNavigationTo('EventCreationScreen')} />
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
