import actionTypes from '../constants/action-types';
// import { Dispatch } from 'redux';
// import { loadJson } from '../api';

export const createAccount = (username: string, password: string) => ({
  username,
  password,
  type: actionTypes.CREATE_ACCOUNT,
});

export const login = (username: string, password: string) => ({
  username,
  password,
  type: actionTypes.LOGIN,
});

export const changeCredential = (credential: string, value: string) => ({
  credential,
  value,
  type: actionTypes.CHANGE_CREDENTIAL,
});

// export const loadCredentials = () => (dispatch: Dispatch<any>) => {
//   loadJson().then((json) => {
//     dispatch(changeStoredCredential('username', json.username));
//     dispatch(changeStoredCredential('password', json.password));
//   });
// };
