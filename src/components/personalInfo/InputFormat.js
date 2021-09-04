import React from "react";
import InputMask from "react-input-mask";
const InputFormat = ({
  className,
  name,
  icon,
  children,
  mask,
  value,
  onChange,
}) => {
  return (
    <div className="inputFormat">
      <InputMask
        autoComplete="off"
        required
        className={className}
        mask={mask}
        name={name}
        value={value}
        onChange={onChange}
      />
      {icon ? <span>{icon}</span> : null}
    </div>
  );
};

export default InputFormat;
