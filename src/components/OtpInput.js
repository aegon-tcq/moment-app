import React from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function OtpInput() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText} >Confirm OTP sent to (5879)</Text>
      <OTPInputView
        style={{width: 500, height: 200}}
        pinCount={4}
        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        // onCodeChanged = {code => { this.setState({code})}}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={code => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      />
      <Text style={[styles.headerText,{fontSize:18}]} >Resend (45s)</Text>
    </View>
  );
}

export default OtpInput;
const styles = StyleSheet.create({
  container: {
    padding:20,
    borderWidth:1,
    // maxHeight: 400,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  headerText:{
      fontSize:24,
      lineHeight:28.64,
      color:"#4E4B66"
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
    borderColor: '#5B5B5B',
  },

  underlineStyleHighLighted: {
    borderColor: '#5B5B5B',
  },
});
