import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { changeBackAct } from "redux/actions";
import ItemFeature from "./ItemFeature";
import PriceCardPlan from "./PriceCardPlan";

const CardPlan = ({ plan, currency, buttonName, color, checked }) => {
  const { price, type, title, features } = plan;
  let history = useHistory();
  const dispatch = useDispatch();
  const handleSuscribe = () => {
    dispatch(changeBackAct());
    history.push({ pathname: "/datos" });
  };
  return (
    <div className={`card cardPlan shadow-sm ${checked ? "d-none" : null}`}>
      <div className="card-body text-center">
        <PriceCardPlan price={price} currency={currency} type={type} />

        <p className="card-text">
          <strong>{title}</strong>
        </p>
      </div>
      <hr className="dropdown-divider" />
      <div className="card-body">
        <ul className="list-group list-group-flush">
          {features.map((item, i) => (
            <ItemFeature key={i} item={item} />
          ))}
        </ul>
      </div>
      <div className="d-grid">
        <button
          className={`btn btn-${color} fw-bold py-3 rounded-0`}
          type="button"
          onClick={handleSuscribe}
        >
          {buttonName}
        </button>
      </div>
    </div>
  );
};

export default CardPlan;
