import React from "react";

const ItemFeature = ({ item, icon }) => {
  const { activo, desciption } = item;
  return (
    <li
      className={`icon-feature list-group-item d-flex justify-content-between align-items-start ${
        !activo ? "inactive" : null
      } `}
    >
      {icon ? (
        <div className="me-1">
          <span>
            <img src={icon} alt="icono check" />
          </span>
        </div>
      ) : null}
      {desciption}
    </li>
  );
};

export default ItemFeature;
