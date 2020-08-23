import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Bounce, Zoom } from "react-reveal";

import ProfilePic from "../../public/images/Profile-replacement1-min.jpg";
import "./About.css";
import Footer from "./Footer";
import { changeScrollStatus } from "../redux/action-creator";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  const {
    workEducationData,
    eventsAchievements,
    scrollToElement,
  } = useSelector((state) => state.about);

  const dispatch = useDispatch();

  function scrollFunction(id) {
    let offsetTop = document.getElementById(`${id}`).offsetTop;
    window.scrollTo({
      top: offsetTop + 130,
      behavior: "smooth",
    });
    dispatch(changeScrollStatus());
  }

  useEffect(() => {
    if (scrollToElement.state === true) {
      if (
        scrollToElement.section !== "" &&
        scrollToElement.section === "work"
      ) {
        scrollFunction("work-section");
      } else {
        scrollFunction("events-section");
      }
    }
  }, [scrollToElement]);
  return (
    <Fragment>
      <Container>
        <Row>
          <div id="about">
            <h1 className="lg-heading mb-2">
              <span className="text-secondary">About</span> Me
            </h1>
            <h2 className="sm-heading">Let me mention just a few...</h2>
            <div className="about-info">
              <div className="image-bio d-flex">
                <Bounce right>
                  <Col md={6} className="profile-pic">
                    <div>
                      <img
                        src={ProfilePic}
                        alt=""
                        className="img-fluid bio-image"
                      />
                    </div>
                  </Col>
                  <Col md={6} className="">
                    <div className="bio">
                      <h3 className="text-secondary">BIO</h3>
                      <p className="show">
                        My life has been a roller coaster ride, its has had its
                        ups and downs, some glorious moments here and there. But
                        I'm not here to bore you with the details. <br />
                        Boiled down, my life comes down to three major things:{" "}
                        <br />
                        <span className="text-secondary-paragraph">
                          <strong>What motivates me: </strong>
                        </span>{" "}
                        The hope that one day atleast one of my ideas will bring
                        great joy or relief, depending on the situation, to as
                        many people as possible. Making the world a little bit
                        more tolerable.
                        <br />
                        <span className="text-secondary-paragraph">
                          <strong>How I will achieve this dream: </strong>
                        </span>{" "}
                        My first goal was to learn web development as it peaked
                        my interests. All while trying to achieve my ultimate
                        goal which is to learn AI and create something with it
                        that could benefit as many people as possible.
                        <br />
                        <span className="text-secondary-paragraph">
                          <strong>What I'm doing right now: </strong>
                        </span>{" "}
                        I'm now in JKUAT university pursuing my degree in
                        Innovation and technology management and also interning
                        at Softsearch Limited as front-end developer. I'm also
                        learning how to intergrate AI with web development
                      </p>
                    </div>
                  </Col>
                </Bounce>
              </div>
              <h2 className="sm-heading work">Work and Education</h2>
              <Zoom>
                <div className="work-education" id="work-section">
                  {workEducationData !== ""
                    ? workEducationData.map((item, index) => (
                        <div className="job" key={index}>
                          <h3>{item.title}</h3>
                          <h4>{item.subtitle}</h4>
                          <p>{item.content}</p>
                        </div>
                      ))
                    : console.log("Loading")}
                </div>
              </Zoom>
              <div className="headings">
                <h2 className="sm-heading work">Events and Achievements</h2>
              </div>
              <Zoom>
                <div className="work-education" id="events-section">
                  {eventsAchievements !== ""
                    ? eventsAchievements.map((item, index) => (
                        <div className="job" key={index}>
                          <h3>{item.title}</h3>
                          <h4>{item.subtitle}</h4>
                          <p>{item.content}</p>
                        </div>
                      ))
                    : console.log("Loading")}
                </div>
              </Zoom>
            </div>
          </div>
        </Row>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default About;
