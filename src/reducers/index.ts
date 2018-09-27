import { AnyAction, Reducer } from "redux";
import actionTypes from "../constants/actions-types";
import { CredentialState, UserPassState } from "../interfaces/App.interface";

const initialState: CredentialState = {
  userCredentials: {
    username: "",
    password: ""
  },
  storedCredentials: {
    username: "",
    password: ""
  }
};

const userCredentials = (state: UserPassState = { username: '', password: '' }, action: AnyAction = { type: '' }): UserPassState => {
  switch (action.type) {
    case actionTypes.CHANGE_CREDENTIAL_USER:
      return { ...state, [action.credential]: action.value }
    default:
      return state;
  }
};

const storedCredentials = (state: UserPassState = { username: '', password: '' }, action: AnyAction = { type: '' }): UserPassState => {
  switch (action.type) {
    case actionTypes.CHANGE_CREDENTIAL_STORED:
      return { ...state, [action.credential]: action.vaue }
    default:
      return state;
  }
}

const rootReducer: Reducer<CredentialState> = (state: CredentialState = initialState, action: AnyAction = { type: '' }): CredentialState => {
  return {
    userCredentials: userCredentials(state.userCredentials, action),
    storedCredentials: storedCredentials(state.storedCredentials, action)
  };
};

export default rootReducer;