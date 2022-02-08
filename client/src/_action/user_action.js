import Axios from "axios";
import { LOGIN_USER, REGISTER_USER } from "./types";

function loginUser(dataToSubmit) {
  const request = Axios.post("/api/user/login", dataToSubmit).then(
    (response) => response.data
  );

  // action의 결과를 reducer에 보내는 작업
  return {
    type: LOGIN_USER,
    payload: request,
  };
}

function registerUser(body) {
  const request = Axios.post("/api/user/register", body).then(
    (response) => response.data
  );

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export { loginUser, registerUser };
