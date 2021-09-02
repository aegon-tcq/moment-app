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
import {useDispatch} from 'react-redux';
import {useAuthService} from './../hooks/useAuthService';
import {addUser} from './../redux/actions/userActions';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default SignUpScreen = ({navigation}) => {
  const {handleRegisterFormChange, handleRequestOTP, setOtp, registerForm} =
    useAuthService();
  const dispatch = useDispatch();

  const refRBSheet = useRef();

  const handleSignUp = async () => {
    // if (await handleRequestOTP()) {
    //   openOtpInput();
    // }
    dispatch(
      addUser({
        token: 'dsa',
      }),
    );
  };

  const openOtpInput = () => refRBSheet.current.open();

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
              width: '30%',
            }}
            source={require('../assets/momentz_final.png')}
          />
        </View>
        <View style={{flex: 0.75}}>
          <Text style={styles.headigText}>Join The Community</Text>
          <Text style={[styles.headigText, {fontSize: 13, lineHeight: 22}]}>
            and 1,254,5797 other users having a good time.
          </Text>
          <View style={styles.formCoantainer}>
            <FormTextInput
              name="email"
              onChangeText={handleRegisterFormChange}
              placeholder={'Email'}
              value={registerForm.email}
            />
            <FormTextInput
              name="password"
              onChangeText={handleRegisterFormChange}
              placeholder={'Password'}
              value={registerForm.password}
            />
            <FormTextInput
              name="phoneNumber"
              onChangeText={handleRegisterFormChange}
              placeholder={'Phone Number'}
              value={registerForm.phoneNumber}
            />
            <FormTextInput
              type={'DOB'}
              value={registerForm.dob}
              onChangeText={handleRegisterFormChange}
              placeholder={'Date of Birth'}
            />
          </View>
        </View>
        <GradientButton onPress={handleSignUp} btnText={'Sign Up'} />
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
