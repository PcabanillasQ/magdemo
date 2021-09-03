import React from "react";
import { typePlan } from "data/config";
import ItemFeature from "./ItemFeature";

const CardPlan = ({ plan, currency, buttonName, color, checked }) => {
  const { price, type, title, features } = plan;
  return (
    <div className={`card cardPlan shadow-sm ${checked ? "d-none" : null}`}>
      <div className="card-body text-center">
        <h5 className="card-title cardPlan__price">
          <span className="tipo-moneda">{currency}</span>
          <span className="monto">{price} </span>
          <span className="text-uppercase">/ {typePlan[type]}</span>
        </h5>

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
        >
          {buttonName}
        </button>
      </div>
    </div>
  );
};

export default CardPlan;
