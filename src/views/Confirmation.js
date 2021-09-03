import IconAlert from "components/shared/IconAlert";
import PriceCardPlan from "components/suscription/PriceCardPlan";
import React from "react";

const Confirmation = () => {
  return (
    <div className="row text-center">
      <div className="col-sm-12">
        <div className="confirmation px-4 py-5 ">
          <IconAlert icon="bi bi-check" />

          <div className="h4 mt-4">Bienvenido, has adquirido el</div>
          <h1 className="display-6 fw-bold">Plan Premium</h1>
          {/* <PriceCardPlan price={price} currency={currency} type={type} /> */}
          <PriceCardPlan price={29} currency="S/" type={0} normal />
          <div className="col-lg-10 mx-auto">
            <p className="mb-4">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
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
