import { AnyAction, Reducer } from "redux";
import actionTypes from "../constants/actions-types";
import { CredentialState } from "../interfaces/App.interface";

const initialState : CredentialState = {
  username: '',
  password: '',
};

const rootReducer : Reducer<CredentialState> = (state : CredentialState = initialState, action: AnyAction): CredentialState => {
  switch (action.type) {
    case actionTypes.CHANGE_CREDENTIAL:
      return { ...state, [action.credential]: action.value}
    case actionTypes.CHANGE_USER:
      return { ...state, username: action.payload };
    case actionTypes.CHANGE_PASS:
      return { ...state, password: action.payload };
    case actionTypes.SUBMIT_CREDENTIALS:
      return { ...state, username: action.payload.user, password: action.payload.pass }
    default:
      return { ...state };
  }
};

export default rootReducer;