import {
  USER_LOGIN_FAILED,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
} from "./userTypesConstants";
import axios from "axios";

export const loginAction = (values, history) => {
  return async (dispatch) => {
    dispatch({
      type: USER_LOGIN_START,
    });

    try {
      const response = await axios.post(`/users/login`, values);

      localStorage.setItem("user", JSON.stringify(response.data));

      dispatch({
        payload: response.data,
        type: USER_LOGIN_SUCCESS,
      });

      history.push("/");
    } catch (e) {
      dispatch({
        payload: e.response.data.message,
        type: USER_LOGIN_FAILED,
      });
    }
  };
};