import {
  ALLERGENS_UPDATE_REQUEST,
  ALLERGENS_UPDATE_SUCCESS,
  ALLERGENS_UPDATE_FAIL,
  ALLERGENS_CREATE_FAIL,
  ALLERGENS_CREATE_REQUEST,
  ALLERGENS_CREATE_SUCCESS,
} from "../constants/allergenConstants";

export const allergenAddReducer = (state = {}, action) => {
  switch (action.type) {
    case ALLERGENS_CREATE_REQUEST:
      return { loading: true };
    case ALLERGENS_CREATE_SUCCESS:
      return { loading: false, success: true };
    case ALLERGENS_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const allergenUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case ALLERGENS_UPDATE_REQUEST:
      return { loading: true };
    case ALLERGENS_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case ALLERGENS_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
}