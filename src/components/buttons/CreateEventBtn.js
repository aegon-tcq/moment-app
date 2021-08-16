import React from 'react'
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import AddEvent from "../../assets/icons/AddEvent.svg"
import Colors from '../../constants/Colors';

export default CreateEventBtn = ({
    customStyles = {},
    onPress = () =>{}
}) =>  {
    return (
        
        <TouchableOpacity 
        onPress={onPress}
        style={{
            ...customStyles,
            position:"absolute",
            bottom:20,
            right:20,
            zIndex:100,
            backgroundColor:Colors.primary,
            borderRadius:20,
            width:170,
            alignItems:"center",
            justifyContent:'space-around',
            paddingHorizontal:20,
            paddingVertical:10,
            flexDirection:"row"
        }} >
        <AddEvent />
            <Text style={{
                fontSize:16,
                fontFamily:"sf-ui-display-medium",
                color:Colors.OffWhite
            }} >Create Event</Text>
        </TouchableOpacity>
    )
}

 
