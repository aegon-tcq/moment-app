import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Colors from '../../constants/Colors';

export default VendorCard = ({
  title = 'TITLE',
  date = 'Friday 9:00 AM',
  borderColor = Colors.yellow,
  imageUrl = 'https://s3-alpha-sig.figma.com/img/0f2f/d1e5/769e11e62fbb9a7d8c475dc0c7c50095?Expires=1630886400&Signature=C1y4K3IHK9IQc0ZTPcl-nuB3VXlvtT7aIQ~DLo7iI9KwzgbleTk~LGv79pfyUeo6~z97DQ9C00AqzKzjta6~rFplIj458ItErCOHBAmoodMr8uJ9IcXtJN8fNI6UJPDMXGgzh6L~6j~qwtw7UGOJi1s1JJNaPsoCzWI7yCTDk18t7KNkQg0Xa9NDD~3YuIYgJwl0KMj~Xw3cS7GXOvw9T0HUZpye73q2j6PKl8BwSsBG5LqXhRRkQWcEOAQyOm0BQ9mWdYIC6MLTIMMGwMnrSnsKs1-Mzalf~ulftUHwpX8tOF4XxKSNRPwaoRBrpLaKa7KAj16rgrWIoFYvmD3yOg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  showLeftIcon = true,
}) => {
  return (
      <View style={[styles.container, {borderLeftColor: borderColor}]}>
      <Image
      style={{
          height:60,
          width:60,
          borderRadius:30
      }}
      source={{uri:imageUrl}}
       />
        <View style={styles.rightBox} >
          <View>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.rowCenter}>
            <AntDesign
              name={'clockcircleo'}
              size={15}
              color={Colors.lightGray}
            />
            <Text
              style={[
                styles.title,
                {
                  color: Colors.lightGray,
                  fontSize: 13,
                  marginLeft: 10,
                },
              ]}>
              {date}
            </Text>
          </View>
          </View>
          <AntDesign name={'arrowright'} size={30} color={Colors.primary} />
        </View>
        
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grayscale,
    height: 80,
    borderRadius: 10,
    padding: 15,
    marginVertical:5,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  rightBox:{
    flexDirection:"row",
    flex:1,
    marginLeft:"5%",
    alignItems:"center",
    justifyContent:"space-between"
  },
  title: {
    fontFamily: 'sf-ui-display-bold',
    fontSize: 16,
    lineHeight: 28,
    color: Colors.darkGray,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftBox: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary,
    marginHorizontal: 15,
  },
});
