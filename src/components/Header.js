import React, { Fragment, useState, useEffect } from "react";
import Link  from "react-router-dom/Link";
import { useRouteMatch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import Button from "react-bootstrap/Button";
import { useOktaAuth } from "@okta/okta-react";

import "./Header.css";

function Header({ children }) {
  const { url } = useRouteMatch();
  const { authState, authService } = useOktaAuth();

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
    removeLinkColor();
    let workLink = document.getElementById("work-link");
    if (workLink !== null) {
      headerStyling("work");
    }
  } else if (url.charAt(1) === "c") {
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
    }
  } else {
    removeLinkColor();
    let homeLink = document.getElementById("home-link");
    if (homeLink !== null) {
      headerStyling(homeLink);
    }
  }

  // Logging In and Out
  const login = () => authService.login("/");
  const logout = () => authService.logout("/");

  return (
    <Fragment>
      <header>
        <Container fluid>
          <Navbar
            collapseOnSelect
            expand="md"
            bg="dark"
            variant="dark"
            className="limit"
          >
            <Navbar.Brand href="/" className="brand ml-lg-4">
              RN
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav id="growth">
                <NavItem>
                  <div className="links mb-2 text-center" id="home-link">
                    <Link to="/">Home</Link>
                    <div className="underline active"></div>
                  </div>
                </NavItem>
                <NavItem>
                  <div className="links mb-2 text-center" id="about-link">
                    <Link to="/about"> About Me</Link>
                    <div className="underline"></div>
                  </div>
                </NavItem>
                <NavItem>
                  <div className="links mb-2 text-center" id="work-link">
                    <Link to="/work">My Work</Link>
                    <div className="underline"></div>
                  </div>
                </NavItem>
                <NavItem>
                  <div className="links mb-2 text-center" id="add-events-link">
                    <Link to="/add-events">Add Events</Link>
                    <div className="underline"></div>
                  </div>
                </NavItem>
                <NavItem>
                  <div className="links mb-2 text-center" id="contact-link">
                    <Link to="/contact">Contact</Link>
                    <div className="underline"></div>
                  </div>
                </NavItem>
                <NavItem>
                  <div className="links mb-2 text-center" id="login-link">
                    {!authState.isAuthenticated ? (
                      <Button className="login" onClick={login}>
                        <a>Login</a>
                      </Button>
                    ) : (
                      <Button className="logout" onClick={logout}>
                        <a>Logout</a>
                      </Button>
                    )}
                    <div className="underline"></div>
                  </div>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
      {children}
    </Fragment>
  );
}

export default Header;
