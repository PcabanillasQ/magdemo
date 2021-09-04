import { combineReducers } from "redux";
import cardsReducer from "./cardReducer";

import planesReducer from "./planesReducer";

const reducers = combineReducers({
  planes: planesReducer,
  card: cardsReducer,
});

export default reducers;
