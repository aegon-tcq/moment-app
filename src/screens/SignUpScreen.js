import React, {useRef} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import FormTextInput from '../components/formInputs/FormTextInput';
import GradientButton from '../components/buttons/GradientButton';
import TransParentButton from '../components/buttons/TransParentButton';
import RBSheet from 'react-native-raw-bottom-sheet';
import OtpInput from '../components/OtpInput';
import { useDispatch } from 'react-redux'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default SignUpScreen = ({navigation}) => {
  const [password, setPassword] = React.useState('');
  const [phoneNo, setPhoneNo] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [dob, setDob] = React.useState('');
  const [otp, setOtp] = React.useState('');
  const [otpVerify, setOtpVerify] = React.useState(false);

  const dispatch = useDispatch();

  const refRBSheet = useRef();

  const navigateToCreateProfile = async () => {
    // signUp();
    // navigation.navigate('CreateProfileScreen');
    console.log("OTP Requested..")
    let res = await fetch("http://52.15.252.232/customers/request-otp",{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        email:"Ayusht0606@gmail.com"
      })
    })
    let json = await res.text();
    console.log(json);

  };

  const openOtpInput = () => refRBSheet.current.open();

  const signUp = () => {
    openOtpInput();
  };

  return (
    <ScrollView
      style={{flex: 1}}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <View style={{height: windowHeight * 0.2}}>
          <Image
            style={{
              height: '100%',
              width: '25%',
            }}
            source={require('../assets/glassIcon.jpg')}
          />
        </View>
        <View style={{flex: 0.75}}>
          <Text style={styles.headigText}>Join The Community</Text>
          <Text style={[styles.headigText, {fontSize: 13, lineHeight: 22}]}>
            and 1,254,5797 other users having a good time.
          </Text>
          <View style={styles.formCoantainer}>
            <FormTextInput onChange={setEmail} placeholder={'Email'} />
            <FormTextInput onChange={setPassword} placeholder={'Password'} />
            <FormTextInput onChange={setPhoneNo} placeholder={'Phone Number'} />
            <FormTextInput
              type={'DOB'}
              value={dob}
              onChange={setDob}
              placeholder={'Date of Birth'}
            />
          </View>
        </View>
        <GradientButton onPress={navigateToCreateProfile} btnText={'Sign Up'} />
        <TransParentButton
          onPress={() => navigation.navigate('LoginScreen')}
          btnText={'Log In'}
        />
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        height={350}
        closeOnPressMask={false}
        customStyles={{
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <OtpInput setOtp={setOtp} />
      </RBSheet>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  headigText: {
    fontSize: 48,
    lineHeight: 50,
    color: '#14142B',
    fontWeight: '300',
  },
  formCoantainer: {
    marginTop: 20,
  },
});
