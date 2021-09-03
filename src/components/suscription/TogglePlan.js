import React from "react";
import { ToggleSwitch } from "react-dragswitch";

const TogglePlan = ({ planes, checked, setChecked }) => {
  return (
    <label className="btnToggle">
      <span className={`me-3 ${!checked ? "fw-bold" : "null"}`}>
        {planes[0]}
      </span>
      <ToggleSwitch
        checked={checked}
        className="btnToggle__switch"
        onColor="#fff"
        offColor="#fff"
        handleColor="black"
        onChange={(e) => {
          setChecked(e);
        }}
      />
      <span className={`ms-3 ${checked ? "fw-bold" : "null"}`}>
        {planes[1]}
      </span>
    </label>
  );
};

export default TogglePlan;
