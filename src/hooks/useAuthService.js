import React from 'react';
import {useDispatch} from 'react-redux';
import {loginService} from './../services/authService';
import {addUser} from './../redux/actions/userActions';

export const useAuthService = () => {
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = React.useState({
    identifier: '',
    password: '',
  });

  const handleLoginFormChange = (name, text) => {
    setLoginForm({
      ...loginForm,
      [name]: text,
    });
  };

  const handleLoginFormSubmit = async () => {
    try {
      const response = await loginService(loginForm);
      const {profile, auth} = response.data;
      dispatch(
        addUser({
          profile,
          token: auth.token,
        }),
      );
    } catch (error) {
      console.log('Auth Eror --- Login -------');
      console.log(error.message);
    }
  };
  return {
    loginForm,
    handleLoginFormChange,
    handleLoginFormSubmit,
  };
};
