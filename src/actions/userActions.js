import axios from "axios";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
} from "../constants/userConstants";

  export const loginActions = (email, password) => async (dispatch) => {
      try {
        dispatch({ type: USER_LOGIN_REQUEST });
        const { data } = await axios.post("http://localhost:5000/user/login", {
          email,
          password,
        });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data));
      } catch (error) {
        dispatch({ type: USER_LOGIN_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
      }
  }

  export const logoutActions = () => async (dispatch) => {
    try {
      localStorage.removeItem("userInfo");
      dispatch({ type: USER_LOGOUT });
    } catch (error) {
      dispatch({ type: USER_LOGOUT, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
    }
    
  };

  export const registerActions = (firstName, lastName, email, password, pic) => async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });

      const { data } = await axios.post("http://localhost:5000/user/register", {
        firstName,
        lastName,
        email,
        password,
        pic,
      });

      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  }
  
  export const updateProfile = (user) => async (dispatch, getState) => {
    try {
      dispatch({ type: USER_UPDATE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        "http://localhost:5000/user/profile",
        user,
        config
      );

      dispatch({ type: USER_UPDATE_SUCCESS, payload: data });

      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  