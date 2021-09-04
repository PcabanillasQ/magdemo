import React from "react";
import { useHistory } from "react-router";
import iconBack from "assets/icons/arrow-left.svg";

const Navbar = ({ title, back }) => {
  const history = useHistory();

  return (
    <nav className="navbar navbar-dark bg-dark ">
      {back ? (
        <span
          className="navbar__icon-back"
          onClick={() => {
            history.goBack();
          }}
        >
          <img
            className="text-white"
            width="32px"
            src={iconBack}
            alt="go back"
          />
        </span>
      ) : null}
      <div className="container-fluid d-flex justify-content-center">
        <span className="navbar-brand mb-0 h1">{title}</span>
      </div>
    </nav>
  );
};

export default Navbar;
