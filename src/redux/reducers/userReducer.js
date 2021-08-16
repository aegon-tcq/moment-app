import {ADD_USER} from '../types.js';

const intialState = {
  name: 'ayush',
  profile: null,
  token: null,
};

export const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};