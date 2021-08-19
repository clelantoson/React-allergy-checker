import axios from "axios";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
//   USER_REGISTER_FAIL,
//   USER_REGISTER_REQUEST,
//   USER_REGISTER_SUCCESS,
//   USER_UPDATE_FAIL,
//   USER_UPDATE_REQUEST,
//   USER_UPDATE_SUCCESS,
} from "../constants/userConstants";

export const loginAction = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });
      const { data } = await axios.post("http://localhost:5000/user/login", {
        email,
        password,
      });
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      localStorage.getItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({ type: USER_LOGIN_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
    }
}

export const logoutAction = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};