import React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import TextHeader from '../../components/Header/TextHeader';
import {monthNames} from "../../constants/MonthNames"
import WeekdayDateContainer from "../../components/WeekdayDateContainer"
import EeventExploreCard from "../../components/Cards/EeventExploreCard"
import CreateEventBtn from '../../components/buttons/CreateEventBtn';

export default EventsUpcomingScreen = () => {
  return (
    <View style={{flex: 1,backgroundColor:"#FFF"}}>
      <TextHeader
        showBackArrow={true}
        showRight={false}
        headerStyle={{height:150,justifyContent: "center",}}
        headerText={monthNames[new Date().getMonth()]}
      />
      <View style={styles.dateContainer} >
        <WeekdayDateContainer />
      </View>
      <FlatList
      style={{marginTop:50}}
        contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
        data={[...Array(10).keys()]}
        keyExtractor={item => item}
        renderItem={() => <EeventExploreCard />}
      />
      <CreateEventBtn
        onPress={() => handleNavigationTo('EventCreationScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    dateContainer:{
        position:"absolute",
        top:100,
        width:"100%",
        paddingHorizontal:20
    }
})