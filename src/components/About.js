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

  function doneResizing(id, offsetTop) {
    if (window.Modernizr.mq("screen and (min-width:768px)")) {
      let offsetTop = 130;
      scrollFunction(id, offsetTop);
    } else if (window.Modernizr.mq("screen and (max-width: 767px)")) {
      if (offsetTop === "") {
        let offsetTop = 500;
        scrollFunction(id, offsetTop);
      } else {
        scrollFunction(id, offsetTop);
      }
    }
  }

  function scrollFunction(id, addTop) {
    let offsetTop = document.getElementById(`${id}`).offsetTop;
    console.log(addTop);
    window.scrollTo({
      top: offsetTop + addTop,
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
        doneResizing("work-section");
      } else {
        let offsetTop = 1300;
        doneResizing("events-section", offsetTop);
      }
    }
  }, [scrollToElement]);
  return (
    <Fragment>
      <Container>
        <div id="about">
          <h1 className="lg-heading mb-2">
            <span className="text-secondary">About</span> Me
          </h1>
          <h2 className="sm-heading">Let me mention just a few...</h2>
          <div className="about-info">
            <Row>
              <div className="image-bio d-flex-column">
                <Col md={6} className="profile-pic my-auto">
                  <Bounce right>
                    <div className="d-flex justify-content-center">
                      <img
                        src={ProfilePic}
                        width={280}
                        height={280}
                        alt="Bio image"
                        className="bio-image"
                      />
                    </div>
                  </Bounce>
                </Col>
                <Col md={6} className="mx-auto mt-5">
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
                      My first goal was to learn web development as it peaked my
                      interests. All while trying to achieve my ultimate goal
                      which is to learn AI and create something with it that
                      could benefit as many people as possible.
                      <br />
                      <span className="text-secondary-paragraph">
                        <strong>What I'm doing right now: </strong>
                      </span>{" "}
                      I'm now in JKUAT university pursuing my degree in
                      Innovation and technology management and also interning at
                      Softsearch Limited as front-end developer. I'm also
                      learning how to intergrate AI with web development
                    </p>
                  </div>
                </Col>
              </div>
            </Row>
            <h2 className="sm-heading work">Work and Education</h2>
            <Zoom>
              <div className="work-education d-flex mb-5" id="work-section">
                <Row>
                  {workEducationData !== ""
                    ? workEducationData.map((item, index) => (
                        <Col key={index} md={4} className="mb-4">
                          <div className="job" key={index}>
                            <h3>{item.title}</h3>
                            <h4>{item.subtitle}</h4>
                            <p>{item.content}</p>
                          </div>
                        </Col>
                      ))
                    : console.log("Loading")}
                </Row>
              </div>
            </Zoom>
            <div className="headings">
              <h2 className="sm-heading work">Events and Achievements</h2>
            </div>
            <Zoom>
              <div
                className="work-education d-flex mx-auto"
                id="events-section"
              >
                <Row>
                  {eventsAchievements !== ""
                    ? eventsAchievements.map((item, index) => (
                        <Col key={index} md={4} className="mb-4">
                          <div className="job" key={index}>
                            <h3>{item.title}</h3>
                            <h4>{item.subtitle}</h4>
                            <p>{item.content}</p>
                          </div>
                        </Col>
                      ))
                    : console.log("Loading")}
                </Row>
              </div>
            </Zoom>
          </div>
        </div>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default About;
