import {
  GET_PLANES_OK,
  GET_PLANES_ERROR,
  SET_PLAN_SELECTED,
  CHANGE_PLAN_SELECTED,
  CHANGE_BACK,
} from "redux/types";
//Constantes
const initialState = {
  data: [],
  planSelected: {},
  namePlanNotSelected: "",
  error: null,
  loading: true,
  back: false,
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
        back: false,
      };
    case GET_PLANES_ERROR:
      return { ...state, error: action.payload, loading: true };
    case SET_PLAN_SELECTED:
      return {
        ...state,
        planSelected: { ...action.payload.planSelected },
        namePlanNotSelected: action.payload.namePlanNotSelected,
        error: null,
      };
    case CHANGE_PLAN_SELECTED:
      return {
        ...state,
        error: null,
        planSelected: { ...action.payload.newSelected },
        namePlanNotSelected: action.payload.newNamePlanNotSelected,
      };
    case CHANGE_BACK:
      return { ...state, back: action.payload };
    default:
      return { ...state };
  }
}
