import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Nav({signedIn, goods}) {
  const navStyle = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <nav>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Catalog</li>
        </Link>
        {!signedIn && (
          <Link style={navStyle} to="/sign">
            <li>Sign up/ Sign in</li>
          </Link>
        )}
        <Link style={navStyle} to="/cart">
          <li>Cart{" "}({goods.length} items)</li>
        </Link>
      </ul>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    signedIn: state.signedIn,
    goods: state.goods
  };
};
export default connect(mapStateToProps)(Nav);
