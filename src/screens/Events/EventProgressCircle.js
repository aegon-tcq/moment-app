import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
  } from 'react-native';

export default  EventProgressCircle = ({
    outerStyle = {},
    textNo = 5,
    managedText = "90 % managed"
}) => {
    return (
        <View style={[styles.outerCircle, { backgroundColor: "#6E7191" },outerStyle]}>
        <View style={styles.leftWrap}>
          <View
            style={[
              styles.halfCircle,
              {
                backgroundColor: "#FFF",
                transform: [
                  { translateX: 42 / 2 },
                  { rotate: '230deg' },
                  { translateX: -42 / 2 },
                ],
              },
            ]}
          />
        </View>
      
        <View style={styles.innerCircle}>
            <View style={{alignItems:"center"}} >
            <Text style={{color:"#FFF",fontSize:12,fontWeight:"bold"}} >
               {textNo}
            </Text>
            <Text style={{fontSize:6,color:"#FFF"}} >{managedText}</Text>
            </View>
        </View>
      </View>
    )
}


const styles = StyleSheet.create({
    outerCircle: {
       position: 'absolute',
       justifyContent: 'center',
       alignItems: 'center',
       width: 84,
       height: 84,
       borderRadius: 42
     },
     innerCircle: {
       overflow: 'hidden',
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#4E4B66',
       width: 68,
       height: 68,
       borderRadius: 34
     },
     leftWrap: {
       position: 'absolute',
       top: 0,
       left: 0,
       width: 42,
       height: 84
     },
     halfCircle: {
       position: 'absolute',
       top: 0,
       left: 0,
       borderTopRightRadius: 0,
       borderBottomRightRadius: 0,
       width: 42,
       height: 84,
       borderRadius: 42
     },
   });
   
