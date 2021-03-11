import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as USER from "./api/apiActions";
import * as IMG from "./img";

const Navbar = (props) => {
  const logout = async () => {
    const { success } = await USER.logout();
    if (success) {
      props.dispatch({ type: "AUTH_LOGOUT" });
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={IMG.logo} alt="agriculture" />
        </Link>
        <form className="d-flex right-nav">
          <Link className="navbar-brand" to="/">
            <img src={IMG.search} alt="agriculture" />
          </Link>
          <Link className="navbar-brand" to="/">
            <img src={IMG.cart} alt="agriculture" />
          </Link>
          <Link
            to="/login"
            onClick={props.auth.isAuth ? logout : null}
            className="btns"
          >
            {props.auth.isAuth ? "Logout" : "Log In"}
          </Link>
          {props.auth.isAuth ? null : (
            <Link to="/login" className="btns">
              Sign Up
            </Link>
          )}
        </form>
      </div>
    </nav>
  );
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Navbar);
