import { combineReducers } from "redux";
import planesReducer from "./planesReducer";

const reducers = combineReducers({
  planes: planesReducer,
});

export default reducers;
