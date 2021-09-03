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
  const { data: planes, loading, error } = useSelector((store) => store.planes);

  let visible = !checked ? 0 : 1;

  useEffect(() => {
    const getPlanes = () => dispatch(getAllPlanesAct());
    getPlanes();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    const setPlanSeleted = (selected) => dispatch(setPlanSelectedAct(selected));
    setPlanSeleted(visible);
    //eslint-disable-next-line
  }, [planes, visible]);
  return (
    <div className="container-fluid px-5 py-4">
      <div className="row">
        <div className="col-sm-12 text-center mb-3">
          <TogglePlan
            planes={["Plan Standar", "Plan Premium"]}
            {...{ checked, setChecked }}
          />
        </div>
        <div className="col-sm-12">
          {error}
          {!loading ? (
            <CardPlan
              plan={planes[visible]}
              currency="S/"
              buttonName={"Suscribirme"}
              color="dark"
            />
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
};

export default Suscription;
