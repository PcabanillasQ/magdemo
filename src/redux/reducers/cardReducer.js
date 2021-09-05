import { ADD_CARD_OK, ADD_CARD_ERROR } from "redux/types";
//Constantes
const initialState = {
  data: {},
  error: null,
  loading: false,
};

// reducers
export default function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD_OK:
      return {
        ...state,
        data: { ...action.payload },
        loading: false,
        error: null,
      };
    case ADD_CARD_ERROR:
      return { ...state, error: action.payload, loading: false };

    default:
      return { ...state };
  }
}
