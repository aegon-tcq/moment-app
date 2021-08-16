import React from 'react'
import {
    Text,
    View,
    Dimensions,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
  } from 'react-native';
import {_iconsData} from "./icons";


export default EventBtns = ({
    title = "TITLE",
    titleStyle = {},
    iconIndex ,
    onPress = ()=>{},
    containerStyle = {}
}) => {


    return (
        <TouchableOpacity 
         onPress={onPress}
         style={{
             ...containerStyle,
             height:180,
             width:'40%',
             marginVertical:10,
             marginHorizontal:"5%",
             borderRadius:15,
             alignItems:"center",
             justifyContent:"center"
         }}
         > 
        {_iconsData(iconIndex)}
            <Text style={{
                ...titleStyle,
                marginTop:10
            }} >{title}</Text>
        </TouchableOpacity>
    )
}

 
