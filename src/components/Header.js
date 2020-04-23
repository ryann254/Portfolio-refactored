import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useRouteMatch } from "react-router-dom";

import "./Header.css";
import MenuPic from "../../public/images/Profile-Pic-One-Croped-min.jpg";

function Header({ children }) {
  const { url } = useRouteMatch();

  const [nav, setNav] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [menuBtn, setMenuBtn] = useState(null);
  const [menuNav, setMenuNav] = useState(null);
  const [menuBranding, setMenuBranding] = useState(null);
  const [navItems, setNavItem] = useState(null);
  const [menu, setMenu] = useState(null);

  //On component mount the following should be fetched and set to state
  useEffect(() => {
    let menuBtn = document.querySelector(".menu-btn");
    let menu = document.querySelector(".menu");
    let menuNav = document.querySelector(".menu-nav");
    let menuBranding = document.querySelector(".menu-branding");
    let navItems = document.querySelectorAll(".nav-item");
    setNav(navItems);
    setMenuBtn(menuBtn);
    setMenu(menu);
    setMenuNav(menuNav);
    setMenuBranding(menuBranding);
    setNavItem(navItems);
  }, []);

  // Removes the current class
  function removeCurrent() {
    Array.from(nav).forEach((navItem) => {
      navItem.classList.remove("current");
    });
  }

  // Adds the current class to the right link
  if (url.charAt(1) === "a") {
    removeCurrent();
    let about = document.getElementById("about");
    if (about !== null) {
      about.classList.add("current");
    }
  } else if (url.charAt(1) === "w") {
    removeCurrent();
    let work = document.getElementById("work");
    if (work !== null) {
      work.classList.add("current");
    }
  } else if (url.charAt(1) === "c") {
    removeCurrent();
    let contact = document.getElementById("contact");
    if (contact !== null) {
      contact.classList.add("current");
    }
  } else {
    removeCurrent();
    let home = document.getElementById("home");
    if (home !== null) {
      home.classList.add("current");
    }
  }

  //Closes the menu on moving to a different page
  function handleClose() {
    setShowMenu(false);
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => {
      item.classList.remove("show");
    });
  }

  //Open and Closes the menu
  const toggleMenu = () => {
    if (!showMenu) {
      menuBtn.classList.add("close");
      menu.classList.add("show");
      menuNav.classList.add("show");
      menuBranding.classList.add("show");
      navItems.forEach((item) => {
        item.classList.add("show");
      });
      setShowMenu(true);
    } else {
      handleClose();
    }
  };

  return (
    <Fragment>
      <div id="bg-img">
        <div className="menu-btn" onClick={toggleMenu}>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>

        <nav className="menu">
          <div className="menu-branding">
            <div>
              <img src={MenuPic} className="portrait" alt="" />
            </div>
          </div>
          <ul className="menu-nav">
            <li id="home" className="nav-item">
              <Link to="/" className="nav-link" onClick={() => handleClose()}>
                Home
              </Link>
            </li>
            <li id="about" className="nav-item">
              <Link
                to="/about"
                className="nav-link"
                onClick={() => handleClose()}
              >
                About Me
              </Link>
            </li>
            <li id="work" className="nav-item">
              <Link
                to="/work"
                className="nav-link"
                onClick={() => handleClose()}
              >
                My Work
              </Link>
            </li>
            <li id="contact" className="nav-item">
              <Link
                to="/contact"
                className="nav-link"
                onClick={() => handleClose()}
              >
                How To Reach Me
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </div>
    </Fragment>
  );
}

Header.propTypes = {
  children: PropTypes.object,
};

export default Header;
