import Axios from "axios";
import { LOGIN_USER } from "../_reducers/types";

export function loginUser(dataToSubmit) {
  const request = Axios.post("/api/user/login", dataToSubmit).then(
    (response) => response.data
  );

  // action의 결과를 reducer에 보내는 작업
  return {
    type: LOGIN_USER,
    payload: request,
  };
}
