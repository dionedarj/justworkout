import actionTypes from "../constants/actions-types";

export const changeUser = (user: string) => ({
  type: actionTypes.CHANGE_USER, payload: user
});

export const changePass = (pass: string) => ({
  type: actionTypes.CHANGE_PASS, payload: pass
});

export const submitCredentials = (user: string, pass: string) => ({
  type: actionTypes.SUBMIT_CREDENTIALS, payload: { user, pass }
});

export const createAccount = (user: string, pass: string) => ({
  type: actionTypes.CREATE_ACCOUNT, payload: { user, pass }
});