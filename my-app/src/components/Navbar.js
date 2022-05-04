import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

export default function NavBar(props) {
  return (
    <div className="NavContainer">
      <Link className="NavText1" to={"/"}>Home</Link>
      <Link
        className="NavText2"
        to={{
          pathname: "/favorites",
          state: props.favorites,
        }}
      >
        Favorite Albums
      </Link>
    </div>
  );
}