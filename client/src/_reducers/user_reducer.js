import { LOGIN_USER, REGISTER_USER } from "../_action/types";

// 전 state와 현재 state를 다음 state로 만든다.
export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case REGISTER_USER:
      return { ...state, register: action.payload };
    default:
      return state;
  }
}
