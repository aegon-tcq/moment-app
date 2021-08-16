import React from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import HeaderWithOptions from '../components/Header/HeaderWithOptions';
import Colors from '../constants/Colors';
import FormTextInput, {TextArea} from '../components/formInputs/FormTextInput';
import ExpandableBtn from "../screens/TicketSelection/ExpandableBtn";
import GradientButton from "../components/buttons/GradientButton"


export default CreateTicketsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <HeaderWithOptions headerText={'Create Tickets'} />
      <ScrollView style={{
          padding:20,
          flex:1
      }} >
        <View style={{
            borderRadius:25,
            borderWidth:2,
            padding:15
        }} >
        <FormTextInput placeholder={'Ticket Name'} name="Ticket Name" />
        <TextArea placeholder={'Description'} />
        <FormTextInput
          placeholder={'Price'}
          name="Price"
        />
        <FormTextInput
          placeholder={'Total Stock'}
          name='Total Stock'
        />
        </View>
        <ExpandableBtn
          ticket={false}
          text={'Add Ticket'}
          description={'Add Ticket'}
        />
      </ScrollView>
      <GradientButton
        btnText={'Save Tickets'}
        // onPress={() => navigation.navigate('TicketSelectionScreen')}
        btnStyles={{margin: 0, marginHorizontal: 20}}
      />
    </View>
  );
};
