import React from 'react'
import {Text, View, Image} from 'react-native';


export default SplashScreen = () => {
    return (
        <View style={{
            backgroundColor:"#FFF",
            flex:1,
            alignItems:"center",
            justifyContent:"center"
        }} >
            <Image 
                resizeMode={"contain"}
                style={{height:"100%",width:"100%"}}
                source={require('../assets/glassIcon.jpg')}
            />
        </View>
    )
}

 
