import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "./HomepageRefactor.scss";
import ProfilePic from "../../../public/images/Profile-replacement3-min.jpg";
import WeddingTemplate from "../../../public/images/projects/Wedding-template.jpg";
import BakeryTemplate from "../../../public/images/projects/Bakery template.png";
import LawTemplate from "../../../public/images/projects/Law-template.png";
import Estimatorapp from "../../../public/images/projects/Estimator-app.png";
import Expenseapp from "../../../public/images/projects/Expense-app.png";
import Fancyform from "../../../public/images/projects/Fancy-form.png";
import Homefurniture from "../../../public/images/projects/Home-furniture.png";
import Netflix from "../../../public/images/projects/Netflix.png";
import Header from "../Header";
import Footer from "../Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomepageRefactor() {
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
  return (
    <>
      <Header />
      <Container className="homepage">
        <Row>
          <Col className="my-auto mr-auto" md={5}>
            <div className="left">
              <div className="middle">
                <div className="sm-header">Ryan Njoroge</div>
                <div className="lg-header">
                  Web Developer, AI Enthusiast
                  <br />
                  and Critical Thinker
                </div>
                <div className="content">
                  Lorem ipsum dolor sit amet, elit nisl mauris, neque porta id
                  nunc nulla urna. Scelerisque pharetra pretium, sagittis metus
                  phasellus velit diam, ut eu et pellentesque urna mus mi, dui
                  risus ullamcorper mi tincidunt vivamus. Suspendisse mauris,
                  adipiscing ac, sit etiam nulla duis felis. Eu auctor et in
                  pretium nascetur turpis, diam eleifend vehicula tempus pretium
                  orci. Enim aliquam amet at molestie, nulla vitae eu proin pede
                  lacus, dolor eget eu erat sed, suspendisse leo, in anim. Duis
                  aliquam tortor, felis lectus massa nulla, id
                </div>
                <div className="homepage-links">
                  <Link to="/work" className="link-projects">
                    View Projects
                  </Link>{" "}
                  <span>|</span>{" "}
                  <a
                    href="https://www.fuzu.com/profile/ryan-njoroge"
                    target="_blank"
                    className="link-read"
                  >
                    Link to my Resume
                  </a>
                  <span>|</span>{" "}
                  <Link to="/about" className="link-read">
                    Read Some More
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col className="ml-auto" md={5}>
            <div className="right-home">
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
        <Row className="home-projects">
          <Col className="mx-auto" md={9}>
            <div className="lg-header text-center mb-5">
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
    </>
  );
}

export default HomepageRefactor;
