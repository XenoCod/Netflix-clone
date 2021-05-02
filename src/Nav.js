import React, { useState, useEffect } from "react";
import "./Nav.css";
import icon from "./netflix.png";
import logo from "./logo.png";
import { useHistory } from "react-router";
import search from "./assets/search.jpg";
import gift from "./assets/gift-box.png";
import bell from "./assets/bell.png";
import arrow from "./assets/down-arrow.png";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img
        onClick={() => history.push("/")}
        src={logo}
        alt=""
        className="nav-logo"
      />

      <div className="navbar">
        <p onClick={() => history.push("/")}> Home</p>
        <p onClick={() => history.push("/")}>TV Shows</p>
        <p onClick={() => history.push("/")}>Movies</p>
        <p onClick={() => history.push("/")}>New & Popular</p>
        <p onClick={() => history.push("/browse")}>Your Profiles</p>
      </div>

      <div className="functions">
        <img src={search} alt="" className="search" />
        <p>CHILDREN</p>
        <img src={gift} alt="" />
        <img src={bell} alt="" />
        <img
          onClick={() => history.push("/profile")}
          src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABQSezyRh9HBbj3UkKUZudkjvwyHbNYw4IXKHetsW-lDRuqmPsrYGjj9kTIJRtNh7koRtDIIT8xsZAl91WBmCo-2b5lbL.png?r=cea"
          alt=""
          className="nav-icon"
        />
      </div>
    </div>
  );
}

export default Nav;
