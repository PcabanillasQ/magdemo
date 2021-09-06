import React, { useState } from "react";
import ItemFeature from "components/suscription/ItemFeature";
import PriceCardPlan from "components/suscription/PriceCardPlan";
import { useDispatch, useSelector } from "react-redux";
import { changePlaSelectedAct } from "redux/actions";
import IconCheck from "assets/icons/check.svg";

const CardPlanSubscribed = ({ planSelected }) => {
  const [show, setShow] = useState(false);
  const { name, title, price, type, features } = planSelected;

  const dispatch = useDispatch();
  const { namePlanNotSelected } = useSelector((store) => store.planes);

  const chanhePlanSelected = () => {
    dispatch(changePlaSelectedAct());
  };

  return (
    <>
      <div className="cardPlan card-plan-subscribed">
        <div
          className="py-3 d-flex justify-content-between px-5"
          onClick={() => setShow(!show)}
        >
          <h4>
            <strong>{name}</strong>
          </h4>
          <PriceCardPlan price={price} currency="S/" type={type} normal />
        </div>

        <div
          className={`card-plan-subscribed__features ${
            show ? "features-hidden" : ""
          } px-5`}
        >
          <p>{title}</p>
          <ul className="list-group list-group-flush">
            {features.map((item, i) => (
              <ItemFeature key={i} item={item} icon={IconCheck} />
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
