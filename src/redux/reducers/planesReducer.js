import {
  GET_PLANES_OK,
  GET_PLANES_ERROR,
  SET_PLAN_SELECTED,
} from "redux/types";
//Constantes
const initialState = {
  data: [],
  planSelected: {},
  error: null,
  loading: true,
};

// reducers
export default function planesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLANES_OK:
      return {
        ...state,
        data: [...action.payload],
        loading: false,
        error: null,
      };
    case GET_PLANES_ERROR:
      return { ...state, error: action.payload, loading: true };
    case SET_PLAN_SELECTED:
      return { ...state, planSelected: { ...action.payload }, error: null };
    default:
      return { ...state };
  }
}
