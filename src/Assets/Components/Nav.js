import React from "react";
import "../sass/components/Header.scss";
import logo from "../Media/icons/icon-144.png";

function Nav() {
  window.addEventListener("scroll", () => {
    var scrolled = window.scrollY;
    let navigat = document.querySelector("nav");
    if (scrolled > 50) {
      navigat.classList.add("scrllSha");
      //   navigat.style.position = "fixed";
      //   navigat.style.top = "0";
      navigat.style.backdropFilter = "blur(10px)";
    } else {
      document.querySelector("nav").classList.remove("scrllSha");
      document.querySelector("nav").classList.remove("scrllSha");
    }
  });
  const hmEff = () => {
    document.querySelector("#ham").classList.toggle("cli_Active");
    document.querySelector("#navLink").classList.toggle("clicked_Active");
  };

  return (
    <header className="Header_nav">
      <nav>
        <div id="brandlogo" className="brandLogo">
          <img src={logo} alt="" />
        </div>
        <div className="mobile_nav ham" tabIndex="0" onClick={hmEff}>
          <div id="ham" className="hamInner"></div>
        </div>
        <div className="navigation links" id="navLink">
          <div className="nav_container">
            <a href="http://">
              <span>01.</span>About
            </a>
            <a href="http://">
              <span>02.</span>Experience
            </a>
            <a href="http://">
              <span>03.</span>Work
            </a>
            <a href="http://">
              <span>04.</span>Contact
            </a>
            <a href="http://" className="resume">
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
