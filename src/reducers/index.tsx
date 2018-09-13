import { AnyAction, Reducer } from "redux";
import { CHANGE_USER, CHANGE_PASS } from "../constants/actions-types";
import { CredentialState } from "../interfaces/App.interface";

const initialState : CredentialState = {
  username: '',
  password: '',
};

const rootReducer : Reducer<CredentialState> = (state : CredentialState = initialState, action: AnyAction) => {
  switch (action.type) {
    case CHANGE_USER:
      return {...state, username: action.payload};
    case CHANGE_PASS:
      return {...state, password: action.payload};
    default:
      return {...state};
  }

};

export default rootReducer;