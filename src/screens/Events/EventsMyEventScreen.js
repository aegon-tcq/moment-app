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
import EeventExploreCard from "../../components/Cards/EeventExploreCard"
import CreateEventBtn from '../../components/buttons/CreateEventBtn';
import TopTabNavigator from "../../components/TopTabNavigator"

export default EventsMyEventScreen = () => {
  return (
    <View style={{flex: 1,backgroundColor:"#FFF"}}>
      <TextHeader
        showBackArrow={true}
        showLocationIcon={false}
        headerStyle={{height:120,justifyContent: "flex-end",}}
        headerText={"My Events"}
      />
      <View style={styles.dateContainer} >
        <TopTabNavigator />
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