import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addDataCardAct } from "redux/actions/cardActions";
import IconCreditCart from "assets/icons/credit-card.svg";
import Input from "./Input";
import { expRegular, maskFecExp, formatCharsMaskFecExp } from "data/config";

const initialState = {
  fullname: {},
  serie: {},
  fecExp: {},
  cvc: {},
};

const FormDatos = ({ children, price }) => {
  const dispatch = useDispatch();
  let history = useHistory();

  const [dataForm, setDataForm] = useState(initialState);
  const [error, setError] = useState(false);

  let closeError = null;

  const { fullname, serie, fecExp, cvc } = dataForm;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullname.valid && serie.valid && fecExp.valid && cvc.valid) {
      setError(false);
      dispatch(
        addDataCardAct({
          fullName: fullname.data,
          serie: serie.data,
          fecExp: fecExp.data,
          cvc: cvc.data,
        })
      );
    } else {
      setError(true);
      closeError = setTimeout(() => {
        setError(false);
      }, 7000);
      return null;
    }
    history.push("/confirmacion");
  };

  // Cambia el parameto de la segunda cifra del mes
  let beforeMaskedValueChange = (newState, oldState, userInput) => {
    let { value } = newState;
    if (value.startsWith("1")) formatCharsMaskFecExp["2"] = "[0-2]";
    else formatCharsMaskFecExp["2"] = "[0-9]";
    return { value, selection: newState.selection };
  };

  useEffect(() => {
    if (serie.valid === true || serie.valid === false) {
      document.documentElement.style.setProperty(
        "--right-icon-input",
        "1.5rem"
      );
    } else {
      document.documentElement.style.setProperty("--right-icon-input", "0");
    }
    return () => {
      clearTimeout(closeError);
    };
  }, [serie.valid, closeError]);

  return (
    <form className="row g-2 formData" onSubmit={handleSubmit}>
      <div className="col-12">
        <Input
          dataForm={dataForm}
          setDataForm={setDataForm}
          label="Nombres y Apellidos"
          placeholder="Ingrese sus nombres"
          messageHelp=" El nombre debe tener almenos 3 digitos, no se permiten numeros"
          expRegular={expRegular.fullName}
          name="fullname"
          required
        />
      </div>
      <div className="col-12">
        <Input
          dataForm={dataForm}
          setDataForm={setDataForm}
          mask="9999 9999 9999 9999"
          label="Numero de Tarjeta"
          icon={IconCreditCart}
          placeholder=".... .... .... ...."
          messageHelp="El numero de tarjeta debe tener 16 dígitos"
          expRegular={expRegular.cardNum}
          name="serie"
          required
        />
      </div>
      <div className="col-6">
        <Input
          dataForm={dataForm}
          setDataForm={setDataForm}
          mask={maskFecExp}
          placeholder="MM/AA"
          label="F. Expira"
          maskChar={null}
          formatChars={formatCharsMaskFecExp}
          messageHelp="la fecha debe tener el siguiente formato"
          expRegular={expRegular.fecExp}
          name="fecExp"
          beforeMaskedValueChange={beforeMaskedValueChange}
          required
        />
      </div>
      <div className="col-6 ">
        <Input
          dataForm={dataForm}
          setDataForm={setDataForm}
          mask="999"
          label="CVC"
          maskChar=""
          messageHelp="El código debe tener 3 digitos"
          expRegular={expRegular.cvc}
          name="cvc"
          step="1"
          required
        />
      </div>
      <div className="col-12 d-grid">
        {error === true ? (
          <div
            className="alert alert-danger text-center fade show"
            role="alert"
            id="liveAlert"
          >
            <strong>Ups!! no se pudo enviar el formulario</strong> <br />
            por favor revisa que todos los campos sean válidos.
          </div>
        ) : null}
        {/* <button type="submit" className="btn btn-dark btn-lg py-3 mt-4 ">
          Pagar S/.{price}.00
        </button> */}
        {children}
      </div>
    </form>
  );
};

export default React.memo(FormDatos);
