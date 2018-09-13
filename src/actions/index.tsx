import { CHANGE_PASS } from "../constants/actions-types";
import { CHANGE_USER } from "../constants/actions-types";

export const changeUser = (user: string) => ({
  type: CHANGE_USER, payload: user
});

export const changePass = (pass: string) => ({
  type: CHANGE_PASS, payload: pass
});