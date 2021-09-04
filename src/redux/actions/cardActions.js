import { ADD_CARD_OK, ADD_CARD_ERROR } from "redux/types";

// Obtener planes
export const addDataCardAct = (data) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_CARD_OK,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_CARD_ERROR,
      payload: "Error al conectarse al servidor",
    });
  }
};
