import * as api from "../api/index.js";
import {
    HISTORY_REQUEST,
    HISTORY_SUCCESS,
    HISTORY_FAIL
} from "../constants/historyConstants";


export const historyActions = (formData) => async (dispatch) => {
  try {
    dispatch({ type: HISTORY_REQUEST });
    const { data } = await api.historyAdd(formData);

    dispatch({ type: HISTORY_SUCCESS, payload: data });
    localStorage.setItem("user_histories", JSON.stringify(data));

    // history.push("/");
  } catch (error) {
    dispatch({
      type: HISTORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateHistoryActions = (id,formData) => async (dispatch) => {
  try {
    dispatch({ type: HISTORY_REQUEST });
    
    const { data } = await api.historyUpdate(id,formData);

    dispatch({ type: HISTORY_SUCCESS, payload: data });
    localStorage.setItem("user_histories", JSON.stringify(data));

    // history.push("/");
  } catch (error) {
    dispatch({
      type: HISTORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};