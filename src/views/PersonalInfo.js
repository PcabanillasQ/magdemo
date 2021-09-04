import React from "react";
import { useSelector } from "react-redux";
import CardPlanSubscribed from "components/personalInfo/CardPlanSubscribed";
import FormDatos from "components/personalInfo/FormDatos";

const PersonalInfo = (props) => {
  const { planSelected } = useSelector((store) => store.planes);

  return (
    <div className="personalInfo">
      <FormDatos price={planSelected.price} />
      <CardPlanSubscribed planSelected={planSelected} />
    </div>
  );
};

export default PersonalInfo;
