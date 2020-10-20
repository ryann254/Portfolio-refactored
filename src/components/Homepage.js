import React, { useState, useEffect, Fragment } from "react";
import Link from "react-router-dom/Link";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";
import Header from "./Header";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Toast from "react-bootstrap/Toast";
import { useOktaAuth } from "@okta/okta-react";

import "./Homepage.scss";
import ProfilePic from "../../public/images/Profile-replacement3-min.webp";
import WeddingTemplate from "../../public/images/Wedding-template.webp";
import BakeryTemplate from "../../public/images/Bakery template.webp";
import LawTemplate from "../../public/images/Law-template.webp";
import Estimatorapp from "../../public/images/Estimator-app.webp";
import Expenseapp from "../../public/images/Expense-app.webp";
import Fancyform from "../../public/images/Fancy-form.webp";
import Homefurniture from "../../public/images/Home-furniture.webp";
import Netflix from "../../public/images/Netflix.webp";
import Messenger from "../../public/images/Messenger-app-coverphoto.webp";
import isEmpty from "../helpers/isEmpty";

function Homepage() {
  const [name, setUserName] = useState("");
  const [toast, showToast] = useState(true);
  const { authState } = useOktaAuth();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    lazyLoad: "ondemand",
    arrows: false,
  };

  const projectSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    lazyLoad: "ondemand",
    arrows: true,
  };

  function getLoggedInUser() {
    const details = JSON.parse(localStorage.getItem("okta-token-storage"));
    if (!isEmpty(details)) {
      setUserName(details.idToken.claims.name);
    }
  }

  const handleToast = () => {
    showToast((toast) => !toast);
  };

  useEffect(() => {
    getLoggedInUser();
  }, []);
  return (
    <Fragment>
      <Header />
      <Container className="homepage">
        {authState.isAuthenticated ? (
          <Toast show={toast} onClose={handleToast} className="toast welcome">
            <Toast.Header>
              <strong className="mr-auto">Greetings!</strong>
              <small>Welcome to my Portfolio</small>
            </Toast.Header>
            <Toast.Body>Mr./Ms. {name}</Toast.Body>
          </Toast>
        ) : null}
        <Row>
          <Col className="my-auto mr-auto" md={6}>
            <div className="left">
              <div className="middle">
                <div className="sm-header">Ryan Njoroge</div>
                <div className="lg-header mb-3">
                  Web Developer, AI Enthusiast
                  <br className="br" />
                  <span className="pl-2"></span>
                  and Critical Thinker
                </div>
                <div className="content mb-3">
                  In the past few years I've been slowly growing my skills in
                  the tech industry to be specific the Web development industry.
                  In my journey I've done a few internships that have helped my
                  experience the full developer cycle, I've indulged in UI/UX
                  designing for a bit, I've also worked with backend
                  technologies e.g. Python and Nodejs and ofcourse frontend
                  technologies. As of now I'm a freelance developer.
                </div>
                <div className="homepage-links d-sm-flex justify-content-center">
                  <Link to="/work" className="link-projects mr-1 mr-sm-2">
                    View Projects
                  </Link>{" "}
                  <span>|</span>{" "}
                  <a
                    href="https://www.fuzu.com/profile/ryan-njoroge"
                    target="_blank"
                    className="link-read mr-1 ml-1 ml-sm-2 mr-sm-2"
                  >
                    Link to my Resume
                  </a>
                  <span>|</span>{" "}
                  <Link to="/about" className="link-read ml-1 ml-sm-2">
                    Read Some More
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col className="ml-auto pr-md-0" md={6} lg={5}>
            <div className="projects">
              <Row className="smaller-screens">
                <div className="projects-header d-flex-column">
                  <div className="lg-header text-capitalize text-center mb-5">
                    Some of my projects
                  </div>
                  <Col className="mb-3">
                    <Fade bottom>
                      <div className="item">
                        <a
                          href="https://ecstatic-colden-597ec2.netlify.app/"
                          target="_blank"
                        >
                          <img
                            src={Messenger}
                            alt="messenger"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                    </Fade>
                  </Col>
                  <Col className="mb-3">
                    <Fade bottom>
                      <div className="item">
                        <a
                          href="https://compassionate-einstein-9ec9cd.netlify.app/"
                          target="_blank"
                        >
                          <img
                            src={WeddingTemplate}
                            alt="wedding"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                    </Fade>
                  </Col>
                  <Col className="mb-3">
                    <Fade bottom>
                      <div className="item">
                        <a
                          href="https://hardcore-tereshkova-f8d88e.netlify.app/"
                          target="_blank"
                        >
                          <img
                            src={LawTemplate}
                            alt="law"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                    </Fade>
                  </Col>
                  <Col className="mb-3">
                    <Fade bottom>
                      <div className="item">
                        <a
                          href="https://dreamy-sammet-3a0674.netlify.app/"
                          target="_blank"
                        >
                          <img
                            src={BakeryTemplate}
                            alt="bakery"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                    </Fade>
                  </Col>
                  <Col className="mb-3">
                    <Fade bottom>
                      <div className="item">
                        <a
                          href="https://ryann254.github.io/Ryan-Covid19-Deploy/"
                          target="_blank"
                        >
                          <img
                            src={Estimatorapp}
                            alt="estimator"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                    </Fade>
                  </Col>
                  <Col className="mb-3">
                    <Fade bottom>
                      <div className="item">
                        <a
                          href="https://expense-tracker-frontend-001.herokuapp.com/"
                          target="_blank"
                        >
                          <img
                            src={Expenseapp}
                            alt="expenseapp"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                    </Fade>
                  </Col>
                  <Col className="mb-3">
                    <Fade bottom>
                      <div className="item">
                        <a href="https://ryanfancyform.cf/" target="_blank">
                          <img
                            src={Fancyform}
                            alt="fancyform"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                    </Fade>
                  </Col>
                  <Col className="mb-3">
                    <Fade bottom>
                      <div className="item">
                        <a
                          href="https://tender-fermi-f8c720.netlify.app/"
                          target="_blank"
                        >
                          <img
                            src={Netflix}
                            alt="netflix"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                    </Fade>
                  </Col>
                  <Col className="mb-3">
                    <Fade bottom>
                      <div className="item">
                        <a
                          href="https://trusting-wilson-8f4a95.netlify.app/"
                          target="_blank"
                        >
                          <img
                            src={Homefurniture}
                            alt="homefurniture"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                    </Fade>
                  </Col>
                </div>
              </Row>
            </div>
            <div className="right-home larger-screens">
              <div className="profile-container d-flex-column justify-content-center">
                <div className="mb-5 d-flex justify-content-center">
                  <img src={ProfilePic} className="profile" alt="profile" />
                </div>
                <div className="profile-content">
                  <Slider {...settings}>
                    <div>
                      <p className="show">
                        My life has been a roller coaster ride, its has had its
                        ups and downs, some glorious moments here and there. But
                        I'm not here to bore you with the details. <br />
                        Boiled down, my life comes down to three major things:{" "}
                        <br />
                      </p>
                    </div>
                    <div>
                      <p className="show">
                        <span className="text-secondary-paragraph">
                          <strong>What motivates me: </strong>
                        </span>{" "}
                        The hope that one day atleast one of my ideas will bring
                        great joy or relief, depending on the situation, to as
                        many people as possible. Making the world a little bit
                        more tolerable. <br />
                      </p>
                    </div>
                    <div>
                      <p className="show">
                        <span className="text-secondary-paragraph">
                          <strong>How I will achieve this dream: </strong>
                        </span>{" "}
                        My first goal was to learn web development as it peaked
                        my interests. All while trying to achieve my ultimate
                        goal which is to learn AI and create something with it
                        that could benefit as many people as possible. <br />
                      </p>
                    </div>
                    <div>
                      <p className="show">
                        <span className="text-secondary-paragraph">
                          <strong>What I'm doing right now: </strong>
                        </span>{" "}
                        I'm now in JKUAT university pursuing my degree in
                        Innovation and technology management and also interning
                        at Softsearch Limited as front-end developer. I'm also
                        learning how to intergrate AI with web development
                      </p>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="home-projects larger-screens">
          <Col className="mx-auto" md={9}>
            <div className="lg-header text-capitalize text-center mb-5">
              Some of my projects
            </div>
            <div>
              <div className="home-project-images">
                <Slider {...projectSettings}>
                  <div className="pr-4">
                    <a href="/work">
                      <img
                        src={WeddingTemplate}
                        className="img-fluid wedding-home"
                        alt="Project"
                      />
                    </a>
                  </div>
                  <div className="pr-4">
                    <a href="/work">
                      <img
                        src={BakeryTemplate}
                        className="img-fluid bakery-home"
                        alt="Project"
                      />
                    </a>
                  </div>
                  <div className="pr-4">
                    <a href="/work">
                      <img
                        src={LawTemplate}
                        className="img-fluid law-home"
                        alt="Project"
                      />
                    </a>
                  </div>
                  <div className="pr-4">
                    <a href="/work">
                      <img
                        src={Estimatorapp}
                        className="img-fluid estimator-home"
                        alt="Project"
                      />
                    </a>
                  </div>
                  <div className="pr-4">
                    <a href="/work">
                      <img
                        src={Expenseapp}
                        className="img-fluid expense-home"
                        alt="Project"
                      />
                    </a>
                  </div>
                  <div className="pr-4">
                    <a href="/work">
                      <img
                        src={Fancyform}
                        className="img-fluid fancy-form-home"
                        alt="Project"
                      />
                    </a>
                  </div>
                  <div className="pr-4">
                    <a href="/work">
                      <img
                        src={Homefurniture}
                        className="img-fluid homefurniture-home"
                        alt="Project"
                      />
                    </a>
                  </div>
                  <div className="pr-4">
                    <a href="/work">
                      <img
                        src={Netflix}
                        className="img-fluid netflix-home"
                        alt="Project"
                      />
                    </a>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default Homepage;
