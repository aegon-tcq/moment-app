import {createAPIConfig} from './apiConfig';
const apiConfig = createAPIConfig();

export const loginService = async formData => {
  return await apiConfig.post('/auth/login', formData);
};

export const logoutService = async formData => {
  return await apiConfig.post('/auth/logout', formData);
};
