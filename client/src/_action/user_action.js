import axios from "axios";
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "./types";

function loginUser(dataToSubmit) {
  const request = axios
    .post("/api/user/login", dataToSubmit)
    .then((response) => response.data);

  // action의 결과를 reducer에 보내는 작업
  return {
    type: LOGIN_USER,
    payload: request,
  };
}

function registerUser(body) {
  const request = axios
    .post("/api/user/register", body)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

function auth() {
  const request = axios.get("/api/user/auth").then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}

export { loginUser, registerUser, auth };
