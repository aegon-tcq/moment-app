import React from 'react'
import {
    Text,
    View,
    Dimensions,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    FlatList,
  } from 'react-native';
import Colors from '../../constants/Colors';

export default  function WishList() {
    return (
       <View>
           <Text style={styles.titleText} >WishList</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    titleText:{
    fontSize: 16,
    lineHeight: 28,
    color:Colors.description,
    fontFamily: 'sf-ui-display-light-58646b33e0551',
    }
})


