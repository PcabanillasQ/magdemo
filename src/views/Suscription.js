import React, { useEffect, useState } from "react";
import CardPlan from "components/suscription/CardPlan";
import TogglePlan from "components/suscription/TogglePlan";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { getAllPlanesAct, setPlanSelectedAct } from "redux/actions";
import Spinner from "components/shared/Spinner";

const Suscription = () => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const {
    data: planes,
    planSelected,
    loading,
    error,
  } = useSelector((store) => store.planes);
  const namesPlanes = planes.map((plan) => plan.name);

  let visible = !checked ? 0 : 1;

  useEffect(() => {
    const getPlanes = () => dispatch(getAllPlanesAct());
    getPlanes();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    const setPlanSeleted = (selected) => dispatch(setPlanSelectedAct(selected));
    setPlanSeleted(planes[visible]);
    //eslint-disable-next-line
  }, [planes, checked]);

  return (
    <div className="row">
      <div className="col-sm-12 text-center mb-3">
        <TogglePlan planes={namesPlanes} {...{ checked, setChecked }} />
      </div>
      <div className="col-sm-12">
        {error}
        {!loading ? (
          <CardPlan
            plan={planSelected}
            currency="S/"
            buttonName={"Suscribirme"}
            color="dark"
          />
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Suscription;
