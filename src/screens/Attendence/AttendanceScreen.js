import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import HeaderWithSearchbar from '../../components/Header/HeaderWithSearchbar';
import AttendanceCard from './AttendanceCard';

const AttendeesList = ({itemList, title = 'TITLE'}) => {
  return (
    <View >
      <Text style={{
          fontWeight:"bold",
          fontSize:10,
          margin:15
      }} >{title}</Text>
      {itemList.map((item, index) => (
        <View key={index} >
        <AttendanceCard />
        </View>
      ))}
    </View>
  );
};

export default AttendanceScreen = () => {
  return (
    <View style={{flex:1,backgroundColor:"#FFF"}} >
      <HeaderWithSearchbar
        title={'Attendees'}
        searchplaceholder={'Search attendees'}
        showLeftIcon={true}
      />
      <ScrollView 
      style={{padding:15}}
       >
      <AttendeesList title={"REGULAR"}  itemList={[1,2,3,4,5,6,7,8]} />
      <AttendeesList title={"VIP"}  itemList={[1,2,3,4,5,6,7,8]} />
      </ScrollView>
    </View>
  );
};
