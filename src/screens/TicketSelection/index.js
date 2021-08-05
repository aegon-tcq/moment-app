import React from 'react'
import {
    Text,
    View,
    Image,
    FlatList,
    StyleSheet,
    ScrollView,
    Dimensions,
  } from 'react-native';
  import GradientButton from "../../components/buttons/GradientButton"
import TextHeader from "../../components/Header/TextHeader";
import ExpandableBtn from './ExpandableBtn';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';


export default TicketSelectionScreen = ({
    dateTime = '14:00 | 08 APR 2021 - 21:00 | 11 APR 2021',
    ticketHeading = 'Gidi Fest: Bringing It Home!',
    location = "Cricket Pitch, TBS, Lagos",
    navigation
}) =>  {
    return (
        <View style={{backgroundColor:"#FFF",flex:1}} >
            <TextHeader
            headerText={"Tickets Selection"}
            showRight={false}
             />
             <View style={styles.topContainer} >
                <Text style={styles.timeDateText} >{dateTime}</Text>
                <Text style={styles.headingText} >
                {ticketHeading}
                </Text>
                <View style={{flexDirection:"row"}} >
                <EvilIcons name={'location'} size={20} color={'#C4C4C4'} />
                    <Text style={styles.locationText} >
                        {location}
                    </Text>
                </View>
             </View>

            <FlatList 
            style={{flex:1}}
            contentContainerStyle={{padding:10}}
                data={[1,2,3,5,6,7]}
                key={item=>item.toString()}
                renderItem={({item}) => <ExpandableBtn
                text={"Couples (N18,000)"}
                 />}
            />
            <GradientButton 
                btnText={"Pay N50,000"}
                onPress={()=>navigation.navigate('TicketPuchasePay')}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    topContainer:{
        justifyContent:"space-around",
        minHeight:150,
        padding:20
    },
    timeDateText:{
        color:"#66738F",
        fontSize:12,
        fontFamily:"sf-ui-display-bold-58646a511e3d9"
    },
    headingText:{
        fontSize:32,
        color:"#000F59"
    },
    locationText:{
        color:"#B06AB3",
        fontSize:12
    }
})

 
