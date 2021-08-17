import React from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import HeaderWithOptions from '../../components/Header/HeaderWithOptions';
import Colors from '../../constants/Colors';
import FormTextInput, {
  TextArea,
} from '../../components/formInputs/FormTextInput';
import GradientButton from '../../components/buttons/GradientButton';
import RBSheet from 'react-native-raw-bottom-sheet';
import TransParentButton from '../../components/buttons/TransParentButton';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Done from '../../assets/icons/Done.svg';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

export default CreateTicketsScreen = ({navigation}) => {
  const refRBSheet = React.useRef();

  return (
    <ScrollView
      style={{flex: 1, paddingBottom: 20}}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <View style={{flex: 1, backgroundColor: Colors.white}}>
        <HeaderWithOptions headerText={'Create Tickets'} />
        <ScrollView
          style={{
            padding: 20,
            flex: 1,
          }}>
          <View
            style={{
              borderRadius: 25,
              borderWidth: 2,
              padding: 15,
            }}>
            <FormTextInput placeholder={'Ticket Name'} name="Ticket Name" />
            <TextArea placeholder={'Description'} />
            <FormTextInput placeholder={'Price'} name="Price" />
            <FormTextInput placeholder={'Total Stock'} name="Total Stock" />
          </View>
          <TouchableOpacity style={styles.addWl}>
            <Text style={styles.text}>Add Tickets</Text>
            <Ionicons name={'add-sharp'} size={30} color={Colors.violetShade} />
          </TouchableOpacity>
        </ScrollView>
        <GradientButton
          btnText={'Save Tickets'}
          onPress={() => {
            refRBSheet.current.open();
          }}
          btnStyles={{margin: 0, marginHorizontal: 20}}
        />
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        height={300}
        closeOnPressMask={false}
        customStyles={{
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <TicketPurchaseSuccess />
      </RBSheet>
    </ScrollView>
  );
};


const TicketPurchaseSuccess = () => {
  return (
    <View style={styles.tpContainer}>
      <View style={styles.tpheader}>
        <Done />
        <Text style={{marginTop: 20}}>
          You have successfully created an event.
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.viewTicket}>
          <Text style={{color: 'white'}}>View Event</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareBtn}>
          <AntDesign
            name="sharealt"
            color="black"
            size={20}
            style={{marginRight: 10}}
          />
          <Text>Share Invitation</Text>
        </TouchableOpacity>
      </View>
      <TransParentButton btnText="Go to Explore" />
    </View>
  );
};

const styles = StyleSheet.create({
  addWl: {
    backgroundColor: '#F3EFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 8,
    padding: 11,
    marginVertical: 20,
  },
  viewTicket: {
    backgroundColor: '#00BA88',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    padding: 11,
  },
  shareBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  tpContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  tpheader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 28,
    color: '#14142B',
    fontFamily: 'sf-ui-display-medium-58646be638f96',
  },
 
});
