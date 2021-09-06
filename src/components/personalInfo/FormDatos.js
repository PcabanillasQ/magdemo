import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addDataCardAct } from "redux/actions/cardActions";
import IconCreditCart from "assets/icons/credit-card.svg";
import Input from "./Input";

const FormDatos = ({ price }) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const [nombre, setNombre] = useState({ data: "", valid: null });
  const [cardNum, setCardNum] = useState({ data: "", valid: null });
  const [fecExp, setFecExp] = useState({ data: "", valid: null });
  const [codCV, setCodCV] = useState({ data: "", valid: null });
  const [error, setError] = useState(false);
  // const { fullName, serie, fecExp, cvc } = dataForm;
  let closeError = null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.valid && cardNum.valid && fecExp.valid && codCV.valid) {
      setError(false);
      dispatch(
        addDataCardAct({
          fullName: nombre.data,
          serie: cardNum.data,
          fecExp: fecExp.data,
          cvc: codCV.data,
        })
      );
    } else {
      setError(true);
      closeError = setTimeout(() => {
        console.log("se ejecuto el settimeout");
        setError(false);
      }, 7000);
      return null;
    }

    history.push("/confirmacion");
  };

  useEffect(() => {
    if (cardNum.valid === true || cardNum.valid === false) {
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
  }, [cardNum.valid, closeError]);
  // const handleInput = ({ target: { name, value } }) =>
  //   setDataCard({ ...dataForm, [name]: value });

  let maskFecExp = "12/34";
  let formatCharsMaskFecExp = {
    1: "[0-1]",
    2: "[0-9]",
    3: "[2]",
    4: "[0-9]",
  };

  const expRegular = {
    fullName: /^[a-zA-ZÀ-ÿ\s]{3,60}$/, // Letras y espacios, pueden llevar acentos.
    cvc: /^\d{3}$/,
    fecExp: /^\d{2}\/\d{2}$/,
    cardNum: /^[0-9\s]{19}$/,
  };

  return (
    <form className="row g-2 formData" onSubmit={handleSubmit}>
      <div className="col-12">
        <Input
          state={nombre}
          setState={setNombre}
          label="Nombres y Apellidos"
          placeholder="Ingrese sus nombres"
          messageHelp=" El nombre debe tener almenos 3 digitos, no se permiten numeros"
          expRegular={expRegular.fullName}
          name="fullName"
          // value={fullName}
          // onChange={handleInput}
          required
        />
      </div>
      <div className="col-12">
        <Input
          mask="9999 9999 9999 9999"
          state={cardNum}
          setState={setCardNum}
          label="Numero de Tarjeta"
          icon={IconCreditCart}
          placeholder=".... .... .... ...."
          messageHelp="El numero de tarjeta debe tener 16 dígitos"
          expRegular={expRegular.cardNum}
          name="serie"
          // value={fullName}
          // onChange={handleInput}
          required
        />
        {/* <InputFormat
          value={serie}
          onChange={handleInput}
        ></InputFormat> */}
      </div>
      <div className="col-6">
        <Input
          mask={maskFecExp}
          state={fecExp}
          placeholder="MM/AA"
          setState={setFecExp}
          label="F. Expira"
          maskChar={null}
          formatChars={formatCharsMaskFecExp}
          messageHelp="la fecha debe tener el siguiente formato"
          expRegular={expRegular.fecExp}
          name="fecExp"
          // value={fecExp}
          // onChange={handleInput}
          required
        />
      </div>
      <div className="col-6 ">
        <Input
          mask="999"
          state={codCV}
          setState={setCodCV}
          label="CVC"
          maskChar=""
          messageHelp="El código debe tener 3 digitos"
          expRegular={expRegular.cvc}
          name="cvc"
          step="1"
          // value={cvc}
          // onChange={handleInput}
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

        <button type="submit" className="btn btn-dark btn-lg py-3 mt-4 ">
          Pagar S/.{price}.00
        </button>
      </div>
    </form>
  );
};;

export default FormDatos;
