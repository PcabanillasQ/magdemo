import { API_URL } from "services/settings";
import {
  GET_PLANES_OK,
  GET_PLANES_ERROR,
  SET_PLAN_SELECTED,
  CHANGE_PLAN_SELECTED,
  CHANGE_BACK,
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

export const changeBackAct = () => (dispatch) => {
  dispatch({ type: CHANGE_BACK, payload: true });
};



export const setPlanSelectedAct = (selected) => async (dispatch, getState) => {
  let { planes } = getState();
  let planSelected = selected;

  let namePlanNotSelected = "";
  if (planSelected !== undefined) {
    let planNotSelected = planes.data.filter(
      (plan) => plan.id !== planSelected.id
    );
    namePlanNotSelected = planNotSelected[0].name;
  }

  dispatch({
    type: SET_PLAN_SELECTED,
    payload: { planSelected, namePlanNotSelected },
  });
};

export const changePlaSelectedAct = () => (dispatch, getState) => {
  let {
    planes: { data, planSelected },
  } = getState();
  let newSelected = data.filter((plan) => plan.id !== planSelected.id);
  let newNamePlanNotSelected = planSelected.name;
  dispatch({
    type: CHANGE_PLAN_SELECTED,
    payload: { newSelected: newSelected[0], newNamePlanNotSelected },
  });
};