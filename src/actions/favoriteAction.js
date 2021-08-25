import * as api from "../api/index.js";
import {
    LIKE_REQUEST,
    LIKE_SUCCESS,
    LIKE_FAIL
} from "../constants/favoriteConstants";


export const likeActions = (formData) => async (dispatch) => {
  try {
    dispatch({ type: LIKE_REQUEST });
    const { data } = await api.likeadd(formData);

    dispatch({ type: LIKE_SUCCESS, payload: data });
    localStorage.setItem("favorited", JSON.stringify(data));

    // history.push("/");
  } catch (error) {
    dispatch({
      type: LIKE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};