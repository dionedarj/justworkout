import { AnyAction, Reducer } from 'redux';
import actionTypes from '../constants/action-types';
import { CredentialState } from '../interfaces/App.interface';

const initialState: CredentialState = {
  storedCredentials: {
    username: '',
    password: '',
  },
  loginCredentials: {
    username: '',
    password: '',
  },
};

const rootReducer: Reducer<CredentialState> =
(state: CredentialState = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.CREATE_ACCOUNT:
      return {
        ...state,
        storedCredentials: {
          username: action.username,
          password: action.password,
        },
      };
    case actionTypes.LOGIN:
      return {
        ...state,
        loginCredentials: {
          username: action.username,
          password: action.password,
        },
      };
    default:
      return state;
  }

};

export default rootReducer;
