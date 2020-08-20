import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useRouteMatch } from "react-router-dom";
import $ from "jquery";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./Header.css";

function Header({ children }) {
  const { url } = useRouteMatch();

  const [nav, setNav] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [menuBtn, setMenuBtn] = useState(null);
  const [btnLines, setBtnLines] = useState(null);
  const [menuNav, setMenuNav] = useState(null);
  const [navItems, setNavItem] = useState(null);
  const [menu, setMenu] = useState(null);
  const [mainNav, setMainNav] = useState("");
  const [border, setBorder] = useState("");
  const [desc, setDesc] = useState("");
  const [hover, toggleHover] = useState(false);

  //On component mount the following should be fetched and set to state
  useEffect(() => {
    let menuBtn = document.querySelector(".menu-btn");
    let btn1 = document.getElementById("line1");
    let btn2 = document.getElementById("line2");
    let btn3 = document.getElementById("line3");
    let menu = document.querySelector(".menu");
    let menuNav = document.querySelector(".menu-nav");
    let navItems = document.querySelectorAll(".nav-item");
    let navLinks = document.querySelectorAll(".links");
    let logoBorder = document.getElementById("logo-border");
    let logoDesc = document.getElementById("logo-desc");
    const btnArray = [];
    btnArray.push(btn1, btn2, btn3);
    setBtnLines(btnArray);
    setNav(navItems);
    setMenuBtn(menuBtn);
    setMenu(menu);
    setMenuNav(menuNav);
    setNavItem(navItems);
    setMainNav(navLinks);
    setBorder(logoBorder);
    setDesc(logoDesc);
  }, []);

  // Changing menu color according to the page rendered
  function menuColorChange() {
    if (btnLines !== null) {
      btnLines.forEach((item) => {
        item.classList.add("add-events");
      });
    }
  }
  function removeMenuColorChange() {
    if (btnLines !== null) {
      btnLines.forEach((item) => {
        item.classList.remove("add-events");
      });
    }
  }

  // Removes the Link color
  function removeLinkColor() {
    Array.from(mainNav).forEach((navLink) => {
      if (navLink !== undefined) {
        navLink.children[0].classList.remove("link-color");
        navLink.children[1].classList.remove("active");
      }
    });
  }

  const addLinkColor = (link) => {
    link.children[0].classList.add("link-color");
    link.children[1].classList.add("active");
  };

  const headerStyling = (link) => {
    if (link === "about") {
      let aboutLink = document.getElementById("about-link");
      addLinkColor(aboutLink);
    } else if (link === "work") {
      let workLink = document.getElementById("work-link");
      addLinkColor(workLink);
    } else if (link === "contact") {
      let contactLink = document.getElementById("contact-link");
      addLinkColor(contactLink);
    } else if (link === "add-events") {
      let addEventsLink = document.getElementById("add-events-link");
      addLinkColor(addEventsLink);
    } else {
      let homeLink = document.getElementById("home-link");
      addLinkColor(homeLink);
    }
  };

  // Adds the current class to the right link
  if (url.charAt(2) === "b") {
    removeLinkColor();
    let aboutLink = document.getElementById("about-link");
    if (aboutLink !== null) {
      headerStyling("about");
    }
  } else if (url.charAt(1) === "w") {
    removeMenuColorChange();
    removeLinkColor();
    let workLink = document.getElementById("work-link");
    if (workLink !== null) {
      headerStyling("work");
    }
  } else if (url.charAt(1) === "c") {
    removeMenuColorChange();
    removeLinkColor();
    let contactLink = document.getElementById("contact-link");
    if (contactLink !== null) {
      headerStyling("contact");
    }
  } else if (url.charAt(2) === "d") {
    removeLinkColor();
    let addEventsLink = document.getElementById("add-events-link");
    if (addEventsLink !== null) {
      headerStyling("add-events");
      menuColorChange();
    }
  } else {
    removeMenuColorChange();
    removeLinkColor();
    let homeLink = document.getElementById("home-link");
    if (homeLink !== null) {
      headerStyling(homeLink);
    }
  }

  //Closes the menu on moving to a different page
  function handleClose() {
    setShowMenu(false);
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach((item) => {
      item.classList.remove("show");
    });
  }

  //Open and Closes the menu
  const toggleMenu = () => {
    if (!showMenu) {
      if (menuBtn !== null) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        navItems.forEach((item) => {
          item.classList.add("show");
        });
        setShowMenu(true);
      }
    } else {
      handleClose();
    }
  };

  //Adds hover effect to the logo elements
  function addHover() {
    if (!hover) {
      border.classList.add("hover");
      desc.classList.add("hover");
      toggleHover(true);
    } else {
      toggleHover(false);
      border.classList.remove("hover");
      desc.classList.remove("hover");
    }
  }

  //Making the header sticky
  function stickyHeader() {
    $(document).ready(function () {
      $(window).scroll(function () {
        if ($(window).scrollTop() > 30) {
          $("#nav-bar").addClass("navbar-fixed");
        }
        if ($(window).scrollTop() < 31) {
          $("#nav-bar").removeClass("navbar-fixed");
        }
      });
    });
  }

  return (
    <Fragment>
      {stickyHeader()}
      <div id="bg-img">
        <header>
          <Container fluid>
            <Navbar bg="light" expand="md">
              <Navbar.Brand href="/" className="brand"></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav></Nav>
              </Navbar.Collapse>
            </Navbar>
          </Container>
        </header>
        <div id="nav-bar">
          <Link to="/" onMouseEnter={addHover} onMouseLeave={addHover}>
            <div className="logo-container">
              <div className="logo-border" id="logo-border">
                <div className="logo">R</div>
              </div>
              <div>
                <div className="logo-name">
                  Ryan Njoroge
                  <hr className="line"></hr>
                  <div className="logo-desc" id="logo-desc">
                    Web Developer & Ai Enthusiast
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <div className="navigation-links">
            <div className="links" id="home-link">
              <Link to="/">Home</Link>
              <div className="underline active"></div>
            </div>
            <div className="links" id="about-link">
              <Link to="/about"> About Me</Link>
              <div className="underline"></div>
            </div>
            <div className="links" id="work-link">
              <Link to="/work">My Work</Link>
              <div className="underline"></div>
            </div>
            <div className="links" id="add-events-link">
              <Link to="/add-events">Add Events</Link>
              <div className="underline"></div>
            </div>
            <div className="links" id="contact-link">
              <Link to="/contact">Contact</Link>
              <div className="underline"></div>
            </div>
          </div>

          <div className="menu-btn" onClick={() => toggleMenu()}>
            <div className="btn-line" id="line1"></div>
            <div className="btn-line" id="line2"></div>
            <div className="btn-line" id="line3"></div>
          </div>
        </div>

        <nav className="menu">
          <ul className="menu-nav">
            <div className="menu-nav-position"></div>
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
            <li id="add-events" className="nav-item">
              <Link
                to="/add-events"
                className="nav-link"
                onClick={() => handleClose()}
              >
                Add Events
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
