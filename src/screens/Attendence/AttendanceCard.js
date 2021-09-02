import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';

const Btn = ({title = 'TITLE', textColor = Colors.blue,  onPress = () => {}}) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[styles.btnText,{color:textColor}]} >{title}</Text>
  </TouchableOpacity>
);

export default AttendanceCard = ({
  userName = 'Lindsey Workman',
  imageUrl = 'https://s3-alpha-sig.figma.com/img/0f2f/d1e5/769e11e62fbb9a7d8c475dc0c7c50095?Expires=1630886400&Signature=C1y4K3IHK9IQc0ZTPcl-nuB3VXlvtT7aIQ~DLo7iI9KwzgbleTk~LGv79pfyUeo6~z97DQ9C00AqzKzjta6~rFplIj458ItErCOHBAmoodMr8uJ9IcXtJN8fNI6UJPDMXGgzh6L~6j~qwtw7UGOJi1s1JJNaPsoCzWI7yCTDk18t7KNkQg0Xa9NDD~3YuIYgJwl0KMj~Xw3cS7GXOvw9T0HUZpye73q2j6PKl8BwSsBG5LqXhRRkQWcEOAQyOm0BQ9mWdYIC6MLTIMMGwMnrSnsKs1-Mzalf~ulftUHwpX8tOF4XxKSNRPwaoRBrpLaKa7KAj16rgrWIoFYvmD3yOg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftBox}>
        <Image
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
          }}
          source={{uri: imageUrl}}
        />
        <Text>{userName}</Text>
      </View>
      <View style={styles.leftBox}>
          <Btn 
          
          title={"CHANGE TICKET"}
           />
          <Btn 
          textColor={Colors.error}
          title={"REMOVE"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginVertical:5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftBox: {
    flex: 1,
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  btnText:{
      fontSize:8,
      fontFamily:"sf-ui-display-medium"
  }
});
