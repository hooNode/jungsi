import { combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import user from "./user_reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
