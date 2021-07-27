import React from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import OtpInputs from 'react-native-otp-inputs';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function OtpInput({navigation}) {

  const [otp, setOtp] = React.useState("");

  const navigateToNextScreen = (value) => {
    setOtp(value);
    if(value.length === 4) navigation.navigate('CreateProfileScreen');;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Confirm OTP sent to (5879)</Text>
      {/* <OTPInputView
        style={{width: 300, height: 200}}
        pinCount={4}
        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        // onCodeChanged = {code => { this.setState({code})}}
        placeholderTextColor={"#000"}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={code => {
          console.log(`Code is ${code}, you are good to go!`);
          navigation.navigate('CreateProfileScreen');
        }}
      /> */}
      <View style={{height:"70%"}} >
      <OtpInputs
          handleChange={(code) => navigateToNextScreen(code)}
          numberOfInputs={4}
          inputStyles={{
            marginHorizontal:10,
            borderWidth:1,
            height:100,
            width:70,
            fontSize:20,
            textAlign:"center"
            }}
          inputContainerStyles={{height:100,width:windowWidth*0.20,position:"relative",justifyContent:"space-around"}}
        />
      </View>
      <Text style={[styles.headerText, {fontSize: 18}]}>Resend (45s)</Text>
    </View>
  );
}

export default OtpInput;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    maxHeight: 400,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  headerText: {
    fontSize: 24,
    lineHeight: 28.64,
    color: '#4E4B66',
  },
  borderStyleBase: {
    width: 50,
    height: 50,
  },

  borderStyleHighLighted: {
    borderColor: '#5B5B5B',
  },

  underlineStyleBase: {
    width: 50,
    height: 50,
    borderWidth: 1,
    color:"#000",
    borderColor: '#5B5B5B',
  },

  underlineStyleHighLighted: {
    borderColor: '#5B5B5B',
    color:"#000",
  },
});
