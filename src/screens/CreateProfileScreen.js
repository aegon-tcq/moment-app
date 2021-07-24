import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import FormInputWithTitle from '../components/formInputs/FormInputWithTitle';
import GradientButton from '../components/buttons/GradientButton';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';

export default CreateProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flex:0.5}} >
      <LinearGradient
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        colors={['#2A7E8D', '#140C56']}
        style={styles.linearGradient}>

        </LinearGradient>
        <View style={styles.elevatedContainer} >
            <Text style={styles.headigText} >Create Your Profile</Text>
            <TouchableOpacity style={styles.prfileImageBtn} >
                <MaterialIcons name={"upgrade"} size={150} color={"#D9DBE9"}/>
                <Text style={[styles.headigText,{fontSize:18,color:"#6E7191"}]} >
                Upload Profile Image
                </Text>
            </TouchableOpacity>
        </View>
      </View>

        <View style={styles.formCoantainer}>
          <FormInputWithTitle
            title={'Full Name'}
            placeholder={'Eg. Mohammed James Wang'}
          />
          <FormInputWithTitle
            title={'Location'}
            placeholder={'Enter Location'}
          />
          <FormInputWithTitle
            title={'Identification'}
            placeholder={'Driver’s License etc.'}
          />
          <TouchableOpacity style={{alignSelf: 'flex-end',flexDirection:"row",alignItems:"center",marginTop:10}}>
          <EvilIcons name={"paperclip"} size={20} color={"#287287"}/>
            <Text
              style={[
                styles.headigText,
                {fontSize: 13, lineHeight: 22, color: '#287287'},
              ]}>
              Upload Form of Identification
            </Text>
          </TouchableOpacity>
      </View>
      <GradientButton 
      onPress={() => navigation.navigate('ChooseInterestScreen')}
      btnText={'Save Profile'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  linearGradient: {
    flex:0.8,
    borderBottomLeftRadius:46,
    borderBottomRightRadius:46
  },
  elevatedContainer:{
    position:"absolute",
    top:25,
    alignItems:"center",
    justifyContent:"space-around",
    width:"100%",
    height:"100%",
  },
  prfileImageBtn:{
      backgroundColor:"#F7F7FC",
      width:"80%",
      height:"80%",
      borderRadius:25,
      alignItems:"center",
      justifyContent:"center"

  },
  headigText: {
    fontSize: 24,
    lineHeight: 28.64,
    color: '#FCFCFC',
    fontWeight: '600',
  },
  formCoantainer: {
    marginTop: 20,
    flex:0.5,padding:20
  },
});
