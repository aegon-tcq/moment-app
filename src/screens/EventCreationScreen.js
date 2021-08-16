import React from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FormInputWithTitle from '../components/formInputs/FormInputWithTitle';
import GradientButton from '../components/buttons/GradientButton';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';
import TransParentHeader from '../components/Header/TransParentHeader';
import Crousel from '../components/Crousel';
import FormTextInput, {TextArea} from '../components/formInputs/FormTextInput';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default EventCreationScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <LinearGradient
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        colors={['#2A7E8D', '#140C56']}
        style={styles.linearGradient}></LinearGradient>
      <View style={styles.container}>
        <TransParentHeader showRightBtn={false} title={'Create Event'} />
        <Crousel
          customStyles={{
            backgroundColor: '#FCFCFC',
            borderRadius: 25,
          }}
          noOfSlides={4}
          showHeader={false}
          renderChildItem={
            <TouchableOpacity style={styles.prfileImageBtn}>
              <MaterialIcons name={'upgrade'} size={150} color={'#D9DBE9'} />
              <Text
                style={[styles.headigText, {fontSize: 18, color: '#6E7191'}]}>
                Upload Profile Image
              </Text>
            </TouchableOpacity>
          }
        />
      </View>
      <ScrollView
        style={{
          backgroundColor: '#FFF',
          width: windowWidth,
          paddingHorizontal: 20,
          marginTop: 100,
        }}>
        <FormTextInput placeholder={'Event Title'} name="Event Title" />
        <TextArea placeholder={'Event Description'} />
        <FormTextInput
          placeholder={'Select Event Category'}
          name="Select Event Category"
        />
        <FormTextInput
          placeholder={'Set Event Budget'}
          name="Set Event Budget"
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <FormTextInput
            inputContainerStyle={{width: '45%'}}
            placeholder={'Date'}
            name="Date"
          />
          <FormTextInput
            inputContainerStyle={{width: '45%'}}
            placeholder={'Time'}
            name="Time"
          />
        </View>
        <FormTextInput placeholder={'Age Group'} name="Age Group" />
      </ScrollView>
      <GradientButton
        onPress={() => navigation.navigate('ChangeLocationScreen')}
        btnText={'Choose Location'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: 250,
    borderBottomLeftRadius: 46,
    borderBottomRightRadius: 46,
    paddingVertical: 20,
    justifyContent: 'flex-end',
    zIndex: -5,
  },
  container: {
    position: 'absolute',
    top: 30,
    height: 300,
    marginLeft: windowWidth * 0.05,
    width: windowWidth * 0.9,

  },
  prfileImageBtn: {
    backgroundColor: '#F7F7FC',
    width: windowWidth * 0.9,
    height: 250,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headigText: {
    fontSize: 24,
    lineHeight: 28.64,
    color: '#FCFCFC',
    fontWeight: '600',
  },
  formCoantainer: {
    marginTop: 20,
    flex: 0.6,
    padding: 20,
  },
});
