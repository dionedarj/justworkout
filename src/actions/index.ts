import actionTypes from "../constants/actions-types";
import { Dispatch } from 'redux';
import { loadJson } from '../api';

export const changeCredential = (credential: string, value: string) => ({
  type: actionTypes.CHANGE_CREDENTIAL,
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
      dispatch(changeCredential('username', json.username));
      dispatch(changeCredential('password', json.password));
    });
}
