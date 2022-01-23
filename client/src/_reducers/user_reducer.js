import { LOGIN_USER } from "./types";

// 전 state와 현재 state를 다음 state로 만든다.
export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    default:
      return state;
  }
}
