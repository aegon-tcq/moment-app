import axios from 'axios';
import {API_URL} from '@env';
export const createAPIConfig = () => {
  const instance = axios.create({
    baseURL: API_URL,
  });

  return instance;
};

//Example for POST REQUEST
// function apiServiceName(params) {
//   const apiConfig = createAPIConfig();
//It Will returns the promise of Success or Failure callbacks
//   return apiConfig.post('/some-route', {
//     fieldName: value,
//   });
// }

//Example for GET REQUEST
// function apiServiceName(params) {
//   const apiConfig = createAPIConfig();
//It Will returns the promise of Success or Failure callbacks
//   return apiConfig.get('/some-route', {
//     params:{
//       paramName:value
//     }
//   });
// }
