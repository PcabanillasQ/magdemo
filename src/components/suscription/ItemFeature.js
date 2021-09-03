import React from "react";

const ItemFeature = ({ item }) => {
  const { activo, desciption } = item;
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-start ${
        !activo ? "disabled" : null
      } `}
    >
      <div className="me-2">
        <i className="bi bi-check fs-5"></i>
      </div>
      {desciption}
    </li>
  );
};

export default ItemFeature;
