import React from "react";
import PropTypes from "prop-types";
import { typePlan } from "data/config";

const PriceCardPlan = ({ normal, price, currency, type }) => {
  return (
    <h5 className={`card-title ${normal ? "fw-bold" : "cardPlan__price"}`}>
      <span className="tipo-moneda">{currency}</span>
      <span className="monto">{price} </span>
      <span className={`${!normal ? "text-uppercase" : ""}`}>
        {!normal ? "/" : ""} {typePlan[type]}
      </span>
    </h5>
  );
};

PriceCardPlan.propTypes = {
  price: PropTypes.number,
  currency: PropTypes.string,
  type: PropTypes.number.isRequired,
  normal: PropTypes.bool,
};
export default PriceCardPlan;
