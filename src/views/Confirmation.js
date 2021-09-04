import React from "react";
import IconAlert from "components/shared/IconAlert";
import PriceCardPlan from "components/suscription/PriceCardPlan";
import { useSelector } from "react-redux";

const Confirmation = () => {
  const { planSelected } = useSelector((store) => store.planes);
  const { name, price, type, title } = planSelected;

  return (
    <div className="row text-center">
      <div className="col-sm-12">
        <div className="confirmation px-4 py-5 ">
          <IconAlert icon="bi bi-check" />

          <div className="h4 mt-4">Bienvenido, has adquirido el</div>
          <h1 className="display-6 fw-bold">{name}</h1>
          <PriceCardPlan price={price} currency="S/" type={type} normal />

          <div className="col-lg-10 mx-auto">
            <p className="mb-4">{title}</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button
                type="button"
                className="btn btn-link btn-lg px-4 gap-3 fw-bold"
              >
                Ir a ver mi plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12">
        <button type="button" className="btn btn-link btn-lg px-4 gap-3">
          <small>Ir a Mag.pe</small>
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
