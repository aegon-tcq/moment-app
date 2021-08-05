import React from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
  } from 'react-native';
import GradientBackground from "../../components/buttons/GradientButton";
import TransParentButton from "../../components/buttons/TransParentButton"
import Wrong from "../../assets/icons/Wrong.svg"

export default  function WentWrongBottomSheet({
    onPress = ()=>{}
}) {
    return (
       <View style={{padding:20,
       alignItems:"center",
       justifyContent:"space-around",
       height:300,
       }} >
       <Wrong />
       <Text style={{
           fontSize:20,
           lineHeight:32,
           fontFamily:"sf-ui-display-light-58646be638f96"
       }} >
       Something went wrong purchasing your ticket (Error: 345xC) 
       </Text>
        <GradientBackground 
            btnText={"Try Again"}
            onPress={onPress}
            btnStyles={{width:"90%"}}
        />
        <TransParentButton 
            btnText={"Skip for Now"}
            textStyle={{color:"#000"}}
        />
       </View>
    )
}


