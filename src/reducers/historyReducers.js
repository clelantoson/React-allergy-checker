import {
    HISTORY_REQUEST,
    HISTORY_SUCCESS,
    HISTORY_FAIL
} from "../constants/historyConstants";

export const historyAddReducer = (state = {}, action) => {
  switch (action.type) {
    case HISTORY_REQUEST:
      return { loading: true };
    case HISTORY_SUCCESS:
      return { loading: false, success: true, userHistories: action.payload };
    case HISTORY_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};