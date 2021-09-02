import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
  } from 'react-native';


export default  EventProgressMultiCircle = () => {
    return (
        <View style={[styles.outerCircle, { backgroundColor: "#6E7191" }]}>
        <View style={styles.leftWrap}>
          <View
            style={[
              styles.halfCircle,
              {
                backgroundColor: "#0096B7",
                transform: [
                  { translateX: 42 / 2 },
                  { rotate: '180deg' },
                  { translateX: -42 / 2 },
                ],
              },
            ]}
          />
        </View>
        <View style={styles.leftWrap}>
          <View
            style={[
              styles.halfCircle,
              {
                backgroundColor: "#2A7E8D",
                transform: [
                  { translateX: 42 / 2 },
                  { rotate: '120deg' },
                  { translateX: -42 / 2 },
                ],
              },
            ]}
          />
        </View>
        <View style={styles.leftWrap}>
          <View
            style={[
              styles.halfCircle,
              {
                backgroundColor: "#C4C4C4",
                transform: [
                  { translateX: 42 / 2 },
                  { rotate: '60deg' },
                  { translateX: -42 / 2 },
                ],
              },
            ]}
          />
        </View>

        <View style={styles.leftWrap}>
          <View
            style={[
              styles.halfCircle,
              {
                backgroundColor: "#00BA88",
                transform: [
                  { translateX: 42 / 2 },
                  { rotate: '30deg' },
                  { translateX: -42 / 2 },
                ],
              },
            ]}
          />
        </View>
        <View style={styles.innerCircle}>
            <View>
            <Text style={{color:"#FFF",fontSize:12,fontWeight:"bold"}} >
                N100k
            </Text>
            <Text style={{fontSize:6,color:"#FFF"}} >90% Managed</Text>
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
   