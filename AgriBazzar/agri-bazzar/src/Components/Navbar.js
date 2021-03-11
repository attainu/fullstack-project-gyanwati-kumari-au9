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
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <Link to="/">
          <img src={IMG.logo} alt="logo" />
        </Link>

        <form className="d-flex right-nav">
          <Link to="/">
            <img src={IMG.search} alt="search" />
          </Link>
          <Link to="/">
            <img src={IMG.cart} alt="cart" />
          </Link>
          {props.auth.isAuth ? (
            <Link to="/" onClick={logout}>
              Logout
            </Link>
          ) : (
            <Link to="/login">Log In</Link>
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
