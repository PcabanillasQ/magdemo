import React from "react";
import { useHistory } from "react-router";
import iconBack from "assets/icons/arrow-left.svg";
import { useSelector } from "react-redux";

const Navbar = ({ title }) => {
  const { back } = useSelector((store) => store.planes);
  const history = useHistory();

  return (
    <nav className="navbar">
      {back ? (
        <span
          className="navbar__icon-back"
          onClick={() => {
            history.goBack();
          }}
        >
          <img width="32px" src={iconBack} alt="go back" />
        </span>
      ) : null}
      <div className="container-fluid d-flex justify-content-center">
        <span className="navbar-brand mb-0">{title}</span>
      </div>
    </nav>
  );
};

export default React.memo(Navbar, (prev, next) => {
  return prev.back === next.back;
});
