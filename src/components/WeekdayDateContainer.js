import React from 'react';
import {View, Text} from 'react-native';
import Colors from '../constants/Colors';

const DateDayView = ({day, date,customStyle}) => {

  const textStyles = {
    fontFamily:"sf-ui-display-bold",
    fontWeight:"bold",
    color:Colors.violetDarkShade,
    margin:5,
    fontSize:11
  }

 return <View>
    <Text style={{...textStyles,...customStyle}} >{day}</Text>
    <Text style={{...textStyles,...customStyle}} >{date}</Text>
  </View>
  }


export default WeekdayDateContainer = () => {
  const [weekDays, setWeekDays] = React.useState([
    'M',
    'T',
    'W',
    'T',
    'F',
    'S',
    'S',
  ]);
  const [dates, setDates] = React.useState([]);

  const getDates = () => {
    let curr = new Date();
    let week = [];

    for (let i = 1; i <= 7; i++) {
      let first = curr.getDate() - curr.getDay() + i;
      let day = new Date(curr.setDate(first)).getDate();
      week.push(day);
    }
    setDates(week);
  };

  React.useEffect(() => getDates(),[]);

  return (
    <View style={{
      flexDirection:"row",
      borderRadius:25,
      backgroundColor:Colors.violetLightShade,
      width:"100%",
      alignItems:"center",
      justifyContent:"space-evenly",
      padding:20
    }} >
      {weekDays.map((day, index) => (
        <DateDayView day={day} customStyle={index === 6 ? {color:"#C30052"} : {}}  date={dates[index]} />
      ))}
    </View>
  );
};
