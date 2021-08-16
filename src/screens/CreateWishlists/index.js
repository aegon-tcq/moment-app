import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity,ScrollView} from 'react-native';
import HeaderWithOptions from './../../components/Header/HeaderWithOptions';
import FormTextInput, { TextArea } from '../../components/formInputs/FormTextInput';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Colors from '../../constants/Colors';
import GradientButton from '../../components/buttons/GradientButton';
import RBSheet from 'react-native-raw-bottom-sheet';
const CreateWishlists = () => {
  const refRBSheet = React.useRef();
  const [itemType,setItemType] = React.useState("gift")
  return (
    <ScrollView
      style={{flex: 1}}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <HeaderWithOptions headerText="Create Wishlists" />
      <View  style={{
        flex: 1,
       
      }}>
      <View style={styles.formView}>
        <FormTextInput 
        placeholder="Gift Name" 
        name="giftName"
        onChangeText={(name,txt) => console.log()}
        />
        <FormTextInput 
        placeholder="Link / Account Information"
        name="Link"
        onChangeText={(name,txt) => console.log()}
        />
        <FormTextInput placeholder="Price"
        name="price"
        onChangeText={(name,txt) => console.log()}
        />
        <TextArea 
        placeholder="Additional Information"
        name="additionalInformation"
        onChangeText={(name,txt) => console.log()}
        />
      </View>
      <TouchableOpacity style={styles.addWl}>
        <Text style={styles.text}>Add Wishlist</Text>
        <Ionicons name={'add-sharp'} size={30} color={Colors.violetShade} />
      </TouchableOpacity>
      </View>
      <GradientButton 
      btnText="Save Wishlist"
      onPress={() =>{
        refRBSheet.current.open()
      }}
      />

  
    </View>
    <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        height={200}
        closeOnPressMask={false}
        customStyles={{
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <View style={{
          paddingHorizontal:30
        }}>
            <Text style={{
              ...styles.text,
              textAlign:'center',
              marginVertical:15
            }}>Select Item Type</Text>
            <TouchableOpacity 
            style={itemType === 'gift' ? styles.selected : styles.default}
            onPress={() =>{
              setItemType("gift")
            }}
            >
              <Text style={{
                ...styles.text,
                color:itemType === 'gift' ? 'white' :'#14142B'
              }}>Gift</Text>
            </TouchableOpacity>
          <TouchableOpacity 
          style={itemType === 'cash' ? styles.selected : styles.default}
          onPress={() =>{
            setItemType("cash")
          }}
          >
            <Text style={{
                ...styles.text,
                color:itemType === 'cash' ? 'white' :'#14142B'
              }}>Cash</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </ScrollView>
  );
};

export default CreateWishlists;

const styles = StyleSheet.create({
  formView: {
    marginHorizontal: 15,
    marginVertical:15,
    borderWidth:1.5,
    borderColor:'black',
    borderRadius:10,
    paddingHorizontal:15,
    paddingVertical:5
  },
  addWl:{
    backgroundColor:"#F3EFFF",
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal: 15,
    borderRadius:8,
    padding:11
  },
  selected:{
    backgroundColor:"#00BA88",
    justifyContent:'center',
    alignItems:'center',
    borderRadius:30,
    padding:11,
  },
  default:{
    justifyContent:'center',
    alignItems:'center',
    borderRadius:30,
    padding:11,
  },
  text: {
    fontSize: 16,
    lineHeight: 28,
    color: '#14142B',
    fontFamily: 'sf-ui-display-medium-58646be638f96',
  },
});
