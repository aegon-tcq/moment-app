import React from 'react';
import {useDispatch} from 'react-redux';
import {
  loginService,
  registerUserService,
  requestOTPService,
  verifyOTPService,
} from './../services/authService';
import {addUser} from './../redux/actions/userActions';

export const useAuthService = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const [loginForm, setLoginForm] = React.useState({
    identifier: 'johndoe@gmail.com',
    password: 'password',
  });

  const handleLoginFormChange = (name, text) => {
    setLoginForm({
      ...loginForm,
      [name]: text,
    });
  };

  const handleLoginFormSubmit = async () => {
    setLoading(true);
    try {
      const response = await loginService(loginForm);
      console.log(response.data);
      const {profile, accessToken} = response.data;
      setTimeout(() => {
        setLoading(false);
        dispatch(
          addUser({
            profile,
            token: accessToken,
          }),
        );
      }, 1000);
    } catch (error) {
      console.log('Auth Eror --- Login -------');
      console.log(error.message);
    }
  };

  const [registerForm, setRegisterForm] = React.useState({
    email: '',
    password: '',
    phoneNumber: '',
    dob: '',
  });
  const [otpVerify, setOtpVerify] = React.useState(false);
  const [otp, setOtp] = React.useState('');

  const handleRegisterFormChange = (name, text) => {
    setRegisterForm({
      ...registerForm,
      [name]: text,
    });
  };

  const handleRequestOTP = async () => {
    try {
      const response = await requestOTPService({
        email: registerForm.email,
      });
      return 'OTP Request';
    } catch (error) {
      console.log('OTP Error --- Request OTP -------');
      console.log(error.message);
      return null;
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await verifyOTPService({
        email: registerForm.email,
        otp,
      });
      return response;
    } catch (error) {
      console.log('OTP Error --- Request OTP -------');
      console.log(error.message);
    }
  };
  const handleRegisterFormSubmit = async () => {
    setLoading(true);
    try {
      const response = await registerUserService(registerForm);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log('Auth Eror --- Register -------');
      console.log(error.message);
    }
  };
  return {
    loading,
    setLoading,
    loginForm,
    handleLoginFormChange,
    handleLoginFormSubmit,
    otp,
    setOtp,
    registerForm,
    handleRegisterFormChange,
    handleRegisterFormSubmit,
    handleRequestOTP,
    handleVerifyOTP,
  };
};
