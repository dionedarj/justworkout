import { AnyAction } from "redux";
import actionTypes from "../constants/actions-types";
import { CredentialState } from "../interfaces/App.interface";

const initialState: CredentialState = {
    storedCredentials: {
        username: "",
        password: "",
    },
    userCredentials: {
        username: "",
        password: ""
    }
};

const rootReducer = (state: CredentialState = initialState, action: AnyAction) => {
    switch (action.type) {
        case actionTypes.CHANGE_CREDENTIAL_USER:
            return {
                ...state,
                userCredentials: {
                    [action.credential]: action.value
                }
            };
        case actionTypes.CHANGE_CREDENTIAL_STORED:
            return {
                ...state,
                storedCredentials: {
                    [action.credential]: action.value
                }
            };
        default:
            return { ...state };
    }
};

export default rootReducer;