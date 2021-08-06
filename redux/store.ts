import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/user-reducer";

const reducers = combineReducers({
  user: userReducer,
});

const middlewares = [thunk];

const initialState = {
  user: { loading: false, user: undefined, error: undefined },
};

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
