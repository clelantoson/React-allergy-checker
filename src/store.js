import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
}
from './reducers/userReducers'

import { historyAddReducer } from './reducers/historyReducers'
 
import{ allergenAddReducer,
  allergenUpdateReducer,
} from "./reducers/allergenReducers";

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,
  allergenAdd: allergenAddReducer,
  allergenUpdate: allergenUpdateReducer,
  histories: historyAddReducer
})

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

  const historieFromStorage = localStorage.getItem("user_histories")
  ? JSON.parse(localStorage.getItem("user_histories"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  histories: {userHistories: historieFromStorage}
}


const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store


