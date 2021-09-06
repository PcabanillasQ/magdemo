import React from "react";
import { Redirect, Route } from "react-router";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, valid, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        valid ? <Component {...props} /> : <Redirect to="/suscripcion" />
      }
    />
  );
};

const mapStateToProps = ({ card: { valid } }) => ({ valid: valid });

export default connect(mapStateToProps)(PrivateRoute);
