import React from "react";
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
  state = { data: "", valid: null },
  setState,
}) => {
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
              {...{ placeholder, name, required, maskChar, formatChars }}
              id={name}
              aria-describedby="nameHelp"
              autoComplete="off"
              className={`form-control form-control-lg ${
                state.valid === true ? "is-valid " : ""
              } ${state.valid === false ? "is-invalid " : ""}`}
              mask={mask}
              value={value}
              onChange={handleChange}
              onKeyUp={validate}
              onBlur={validate}
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
              // {...{ type, placeholder, value, onChange, name, required }}
              {...{ type, placeholder, name, required, step }}
              className={`form-control form-control-lg ${
                state.valid === true ? "is-valid " : ""
              } ${state.valid === false ? "is-invalid " : ""}`}
              id={name}
              aria-describedby="nameHelp"
              value={state.data}
              onChange={handleChange}
              onKeyUp={validate}
              onBlur={validate}
            />
            {icon ? (
              <span>
                {" "}
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
