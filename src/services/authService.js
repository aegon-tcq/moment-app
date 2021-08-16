import {createAPIConfig} from './apiConfig';
const apiConfig = createAPIConfig();

export const loginService = async formData => {
  return await apiConfig.post('/auth/login', formData);
};

export const registerUserService = async formData => {
  return await apiConfig.post('/customers/register', formData);
};

export const requestOTPService = async formData => {
  return await apiConfig.post('/customers/request-otp', formData);
};

export const verifyOTPService = async formData => {
  return await apiConfig.post('/customers/verify-otp', formData);
};

export const logoutService = async formData => {
  return await apiConfig.post('/auth/logout', formData);
};
