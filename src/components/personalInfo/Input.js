import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";

const Input = ({
  type = "text",
  label,
  placeholder,
  messageHelp,
  name,
  icon,
  expRegular,
  value,
  formatChars,
  required,
  step,
  maskChar = null,
  mask,
  dataForm,
  beforeMaskedValueChange,
  setDataForm,
}) => {
  const [state, setState] = useState({ data: "", valid: null });
  const handleChange = ({ target: { value } }) => {
    setState({ ...state, data: value });
  };

  const validate = () => {
    if (expRegular) {
      if (expRegular.test(state.data)) {
        setState({ ...state, valid: true });
      } else {
        setState({ ...state, valid: false });
      }
    }
  };

  const sendData = () => {
    setDataForm({ ...dataForm, [name]: { ...state } });
  };

  useEffect(() => {
    if (icon) {
      if (state.valid === true || state.valid === false) {
        document.documentElement.style.setProperty(
          "--right-icon-input",
          "1.5rem"
        );
      } else {
        document.documentElement.style.setProperty("--right-icon-input", "0");
      }
    }
  }, [icon, state.valid]);

  return (
    <>
      {label && (
        <label htmlFor={name} className="form-label">
          {label}
        </label>
      )}
      <div className="inputForm">
        {mask ? (
          <>
            <InputMask
              {...{
                placeholder,
                name,
                value,
                required,
                maskChar,
                formatChars,
                beforeMaskedValueChange,
                mask,
              }}
              className={`form-control form-control-lg ${
                state.valid === true ? "is-valid " : ""
              } ${state.valid === false ? "is-invalid " : ""}`}
              id={name}
              aria-describedby="nameHelp"
              autoComplete="off"
              onChange={handleChange}
              onKeyUp={validate}
              onBlur={sendData}
            />

            {icon ? (
              <span>
                <img src={icon} alt="icono tarjeta" />
              </span>
            ) : null}
            <small id="nameHelp" className="input-error invalid-feedback">
              {messageHelp}
            </small>
          </>
        ) : (
          <>
            <input
              {...{ type, placeholder, name, required, step }}
              className={`form-control form-control-lg ${
                state.valid === true ? "is-valid " : ""
              } ${state.valid === false ? "is-invalid " : ""}`}
              id={name}
              aria-describedby="nameHelp"
              value={state.data}
              onChange={handleChange}
              onKeyUp={validate}
              onBlur={sendData}
            />
            {icon ? (
              <span>
                <img src={icon} alt="icono tarjeta" />
              </span>
            ) : null}
            <small id="nameHelp" className="input-error invalid-feedback">
              {messageHelp}
            </small>
          </>
        )}
      </div>
    </>
  );
};

export default Input;
