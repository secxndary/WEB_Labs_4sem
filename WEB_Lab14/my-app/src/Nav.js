import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    const navStyle = {
        color: "white",
        textDecoration: "none"
    }
  return (
    <nav>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Таблица</li>
        </Link>
        <Link style={navStyle} to="/secondPage">
          <li>Каталог продуктов</li>
        </Link>
        <Link style={navStyle} to="/thirdPage">
          <li>Поиск</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
