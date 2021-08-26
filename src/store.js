import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./reducers/userReducers";

import {
  allergenAddReducer,
  allergenUpdateReducer,
} from "./reducers/allergenReducers";

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,
  userAllergens: allergenAddReducer,
  allergenUpdate: allergenUpdateReducer,
})

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

  const allergensFromStorage = localStorage.getItem("user_allergens")
    ? JSON.parse(localStorage.getItem("user_allergens"))
    : null;
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  userAllergens: allergensFromStorage,
};


const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store


