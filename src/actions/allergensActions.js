import * as api from "../api/index.js";
import {
  ALLERGENS_UPDATE_REQUEST,
  ALLERGENS_UPDATE_SUCCESS,
  ALLERGENS_UPDATE_FAIL,
  ALLERGENS_CREATE_REQUEST,
  ALLERGENS_CREATE_SUCCESS,
  ALLERGENS_CREATE_FAIL,
} from "../constants/allergenConstants";

export const addAllergenAction = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: ALLERGENS_CREATE_REQUEST,
    });

    const { data } = await api.addAllergen(formData);

    dispatch({
      type: ALLERGENS_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ALLERGENS_CREATE_FAIL,
      payload: message,
    });
  }
};

export const updateNoteAction = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: ALLERGENS_UPDATE_REQUEST,
    });

    const { data } = await api.updateUser(formData);

    dispatch({
      type: ALLERGENS_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ALLERGENS_UPDATE_FAIL,
      payload: message,
    });
  }
};
