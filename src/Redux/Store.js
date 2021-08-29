import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer } from "./User/userReducer";
import thunk from "redux-thunk";


const reducers = combineReducers({
  userDetails: userReducer,

});

const userFromLocalStorage = JSON.parse(localStorage.getItem("user")) || {};

const initialState = {
  userDetails: {
    user: userFromLocalStorage,
  },

};

const middlewares = [thunk];

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares)
);

export default store;
