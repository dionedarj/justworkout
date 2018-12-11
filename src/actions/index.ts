import actionTypes from "../constants/actions-types";
import { Dispatch } from 'redux';
import { loadJson } from '../api';

export const changeStoredCredential = (credential: string, value: string) => ({
  type: actionTypes.CHANGE_CREDENTIAL_STORED,
  credential,
  value
});

export const changeUserCredential = (credential: string, value: string) => ({
  type: actionTypes.CHANGE_CREDENTIAL_USER,
  credential,
  value
});

export const submitCredentials = (user: string, pass: string) => ({
  type: actionTypes.SUBMIT_CREDENTIALS,
  user,
  pass
});

export const loadCredentials = () => (dispatch: Dispatch<any>) => {
    loadJson().then((json) => {
      dispatch(changeStoredCredential('username', json.username));
      dispatch(changeStoredCredential('password', json.password));
    });
}
