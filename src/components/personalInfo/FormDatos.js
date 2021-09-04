import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addDataCardAct } from "redux/actions/cardActions";
import InputFormat from "./InputFormat";
const initiaState = {
  names: "",
  serie: "",
  fecExp: "",
  cvc: "",
};
const FormDatos = ({ price }) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const [dataForm, setDataCard] = useState(initiaState);

  const { names, serie, fecExp, cvc } = dataForm;

  const handleInput = ({ target: { name, value } }) =>
    setDataCard({ ...dataForm, [name]: value });

  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addDataCardAct(dataForm));
    history.push("/confirmacion");
  };

  // console.log(Number(serie.split(" ").join("")));

  return (
    <form className="row g-2" onSubmit={handleSubmit}>
      <div className="col-12 mb-3">
        <label htmlFor="names" className="form-label">
          Nombre y Apellidos
        </label>

        <input
          type="text"
          className="form-control"
          id="names"
          aria-describedby="nameHelp"
          required
          name="names"
          value={names}
          onChange={handleInput}
        />
        {/* <div id="nameHelp" className="form-text">
          We'll never share your email with anyone else.
        </div> */}
      </div>
      <div className="col-12 mb-3">
        <label htmlFor="name" className="form-label">
          Número
        </label>
        <InputFormat
          mask="9999 9999 9999 9999"
          className="form-control"
          value={serie}
          icon={<i className="bi bi-credit-card"></i>}
          name="serie"
          onChange={handleInput}
        ></InputFormat>
      </div>
      <div className="col-6  mb-3">
        <label htmlFor="inputCity" className="form-label">
          F. Expira
        </label>
        <InputFormat
          className="form-control"
          mask="99/99 "
          name="fecExp"
          value={fecExp}
          onChange={handleInput}
        />
      </div>
      <div className="col-6 mb-3">
        <label htmlFor="cvc" className="form-label">
          CVC
        </label>
        <input
          type="text"
          className="form-control"
          id="cvc"
          required
          name="cvc"
          value={cvc}
          onChange={handleInput}
        />
      </div>
      <button type="submit" className="btn btn-dark">
        Pagar S/.{price}.00
      </button>
    </form>
  );
};

export default FormDatos;
