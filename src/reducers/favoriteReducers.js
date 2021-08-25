import {
    LIKE_REQUEST,
    LIKE_SUCCESS,
    LIKE_FAIL
} from "../constants/favoriteConstants";

export const likeAddReducer = (state = {}, action) => {
  switch (action.type) {
    case LIKE_REQUEST:
      return { loading: true };
    case LIKE_SUCCESS:
      return { loading: false, success: true };
    case LIKE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};