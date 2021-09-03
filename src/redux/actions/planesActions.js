import { API_URL } from "services/settings";
import {
  GET_PLANES_OK,
  GET_PLANES_ERROR,
  SET_PLAN_SELECTED,
} from "redux/types";

// Obtener planes
export const getAllPlanesAct = () => async (dispatch) => {
  try {
    const res = await fetch(`${API_URL}/planes`);
    const data = await res.json();
    dispatch({
      type: GET_PLANES_OK,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PLANES_ERROR,
      payload: "Error al conectarse al servidor",
    });
  }
};

export const setPlanSelectedAct = (selected) => async (dispatch, getState) => {
  let { planes } = getState();
  dispatch({ type: SET_PLAN_SELECTED, payload: { ...planes.data[selected] } });
};
