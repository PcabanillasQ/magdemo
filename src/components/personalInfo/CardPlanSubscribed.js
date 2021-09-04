import ItemFeature from "components/suscription/ItemFeature";
import PriceCardPlan from "components/suscription/PriceCardPlan";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePlaSelectedAct } from "redux/actions";

const CardPlanSubscribed = ({ planSelected }) => {
  const [show, setShow] = useState(false);
  const { name, title, price, currency, type, features } = planSelected;

  const dispatch = useDispatch();
  const { namePlanNotSelected } = useSelector((store) => store.planes);

  const chanhePlanSelected = () => {
    dispatch(changePlaSelectedAct());
  };

  return (
    <>
      <div className="card card-plan-subscribed">
        <div
          className="py-3 d-flex justify-content-between px-5"
          onClick={() => setShow(!show)}
        >
          <h4>
            <strong>{name}</strong>
          </h4>
          <PriceCardPlan price={price} currency={currency} type={type} normal />
        </div>

        <div
          className={`card-plan-subscribed__features ${
            show ? "features-hidden" : ""
          } px-5`}
        >
          <p className="card-text">{title}</p>
          <ul className="list-group list-group-flush">
            {features.map((item, i) => (
              <ItemFeature key={i} item={item} />
            ))}
          </ul>
        </div>

        <div className="text-center px-5">
          <button
            type="button"
            className="btn btn-link"
            onClick={chanhePlanSelected}
          >
            Cambiar a {namePlanNotSelected}
          </button>
        </div>
      </div>
    </>
  );
};

export default CardPlanSubscribed;
