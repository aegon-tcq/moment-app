import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import TextHeader from '../../components/Header/TextHeader';
import Feather from 'react-native-vector-icons/dist/Feather';
import WeekdayDateContainer from '../../components/WeekdayDateContainer';
import ToDoCard from '../../components/Cards/ToDoCard';

export default TodosScreen = () => {
  return <View style={{flex: 1,backgroundColor:"#FFF"}}>
  <TextHeader
    showBackArrow={true}
    showRight={true}
    headerStyle={{height:150,justifyContent: "center",}}
    headerText={"To-Dos"}
    rightIcon={<Feather name={'more-vertical'} size={30} color={'#FFF'} />}
  />
  <View style={styles.dateContainer} >
    <WeekdayDateContainer />
  </View>
  <FlatList
  style={{marginTop:50}}
    contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
    data={[...Array(10).keys()]}
    keyExtractor={item => item}
    renderItem={() => <ToDoCard />}
  />
  
</View>
};

const styles = StyleSheet.create({
    dateContainer:{
        position:"absolute",
        top:100,
        width:"100%",
        paddingHorizontal:20
    }
})