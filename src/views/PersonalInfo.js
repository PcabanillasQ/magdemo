import React from "react";
import { useSelector } from "react-redux";
import CardPlanSubscribed from "components/personalInfo/CardPlanSubscribed";
import FormDatos from "components/personalInfo/FormDatos";
import { useHistory } from "react-router";

const PersonalInfo = (props) => {
  const { planSelected } = useSelector((store) => store.planes);
  const history = useHistory();
  const verPlanes = () => {
    history.push("/suscripcion");
  };


  if (Object.keys(planSelected).length === 0)
    return (
      <div className="text-center">
        <p>No se ha seleccionado ningun Plan, porfavor selecciona uno</p>
        <button className="btn btn-dark" onClick={verPlanes}>
          Ver Planes
        </button>
      </div>
    );
  return (
    <div className="personalInfo">
      <FormDatos
        // price={planSelected.price}
        children={
          <button type="submit" className="btn btn-dark btn-lg py-3 mt-4 ">
            Pagar S/.{planSelected.price}.00
          </button>
        }
      />
      <CardPlanSubscribed planSelected={planSelected} />
    </div>
  );
};

export default PersonalInfo;
