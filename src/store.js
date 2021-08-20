import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userUpdate: userUpdateReducer
})

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}


const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store


