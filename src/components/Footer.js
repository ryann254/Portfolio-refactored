import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  useEffect(() => {
    let date = document.getElementById("date");
    if (date.innerHTML === "") {
      let currentYear = new Date().getFullYear();
      if (currentYear !== undefined) {
        date.innerHTML = currentYear;
      }
    }
  }, []);
  return (
    <>
      <Container fluid>
        <Row className="d-flex justify-content-between">
          <Col>
            <hr className="line-breaker"></hr>
            <div className="pre-footer">
              <div className="content-dev">Need a FrontEnd Developer?</div>
              <div className="content-work">
                <Link to="/contact">
                  Let's Get To Work <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <hr className="line-breaker larger-screens"></hr>
        <Row className="smaller-screens">
          <div className="page-footer">
            <Col>
              <hr className="line-breaker smaller-screens"></hr>
              <div className="contact-info mt-3 mt-md-0 mb-4">
                <div className="d-flex mb-2 justify-content-center">
                  <h2>
                    Contact <br className="br" />
                    information
                  </h2>
                  <div className="line-footer"></div>
                </div>
                <div className="contact-content mt-2">
                  <div>
                    <p className="contact-text pl-2 pr-2">
                      Feel free to reach out at any time, through email or call.
                    </p>
                  </div>
                  <div>
                    E:
                    <span className="highlight link">
                      <a href="mailto:keddelyronjoz@gmail.com">
                        keddelyronjoz@gmail.com
                      </a>
                    </span>
                  </div>
                  <div>
                    P: <span className="highlight">+254796867328</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="project mb-4">
                <div className="d-flex justify-content-center mb-2">
                  <h2>
                    My Recent <br className="br" /> Projects
                  </h2>
                  <div className="line-footer"></div>
                </div>
                <div className="projects-content mt-2">
                  <div>
                    <a
                      href="https://compassionate-einstein-9ec9cd.netlify.app/"
                      target="_blank"
                    >
                      Wedding Template
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://hardcore-tereshkova-f8d88e.netlify.app/"
                      target="_blank"
                    >
                      Law Template
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://dreamy-sammet-3a0674.netlify.app/"
                      target="_blank"
                    >
                      Bakery Template
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://ryann254.github.io/Ryan-Covid19-Deploy/"
                      target="_blank"
                    >
                      Covid-19 Estimator
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://expense-tracker-frontend-001.herokuapp.com/"
                      target="_blank"
                    >
                      Expense Tracker
                    </a>
                  </div>
                  <div>
                    <a href="https://ryanfancyform.cf/" target="_blank">
                      Fancy UI
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://tender-fermi-f8c720.netlify.app/"
                      target="_blank"
                    >
                      Netflix Clone App
                    </a>
                  </div>
                  <div>
                    <a href="https://ryanphotography.cf/" target="_blank">
                      Home Furniture
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="availability mb-4">
                <div className="d-flex justify-content-center">
                  <h2>
                    Current <br className="br" /> availability
                  </h2>
                  <div className="line-footer"></div>
                </div>
                <div className="availability-content mt-2">
                  <div>
                    <p className="pl-2 pr-2">
                      Most of the time I'm working on a project(either personal
                      or business related) but I’ll be happy to discuss new
                      opportunities. Let’s get in touch!
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="follow mb-4">
                <div className="d-flex justify-content-center mb-2">
                  <h2>
                    Follow <br className="br" /> me on
                  </h2>
                  <div className="line-footer"></div>
                </div>
                <div className="follow-content mt-2">
                  <div>
                    <a href="https://twitter.com/ronjozkeddely" target="_blank">
                      Twitter
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/ryann254" target="_blank">
                      Github
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/ryan-n-3a81a9198"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </Row>

        <Row className="larger-screens">
          <div className="page-footer">
            <Col>
              <div className="contact-info mb-4">
                <div className="d-flex mb-2 justify-content-center">
                  <h2>
                    Contact <br className="br" />
                    information
                  </h2>
                  <div className="line-footer"></div>
                </div>
                <div className="contact-content mt-2">
                  <div>
                    <p className="contact-text pl-2 pr-2">
                      Feel free to reach out at any time, through email or call.
                    </p>
                  </div>
                  <div>
                    E:
                    <span className="highlight link">
                      <a href="mailto:keddelyronjoz@gmail.com">
                        keddelyronjoz@gmail.com
                      </a>
                    </span>
                  </div>
                  <div>
                    P: <span className="highlight">+254796867328</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="project mb-4">
                <div className="d-flex justify-content-center mb-2">
                  <h2>
                    My Recent <br className="br" /> Projects
                  </h2>
                  <div className="line-footer"></div>
                </div>
                <div className="projects-content mt-2">
                  <div>
                    <a
                      href="https://compassionate-einstein-9ec9cd.netlify.app/"
                      target="_blank"
                    >
                      Wedding Template
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://hardcore-tereshkova-f8d88e.netlify.app/"
                      target="_blank"
                    >
                      Law Template
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://dreamy-sammet-3a0674.netlify.app/"
                      target="_blank"
                    >
                      Bakery Template
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://ryann254.github.io/Ryan-Covid19-Deploy/"
                      target="_blank"
                    >
                      Covid-19 Estimator
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://expense-tracker-frontend-001.herokuapp.com/"
                      target="_blank"
                    >
                      Expense Tracker
                    </a>
                  </div>
                  <div>
                    <a href="https://ryanfancyform.cf/" target="_blank">
                      Fancy UI
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://tender-fermi-f8c720.netlify.app/"
                      target="_blank"
                    >
                      Netflix Clone App
                    </a>
                  </div>
                  <div>
                    <a href="https://ryanphotography.cf/" target="_blank">
                      Home Furniture
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </Row>
        <Row>
          <div className="page-footer">
            <Col>
              <div className="availability mb-4">
                <div className="d-flex justify-content-center">
                  <h2>
                    Current <br className="br" /> availability
                  </h2>
                  <div className="line-footer"></div>
                </div>
                <div className="availability-content mt-2">
                  <div>
                    <p className="pl-2 pr-2">
                      Most of the time I'm working on a project(either personal
                      or business related) but I’ll be happy to discuss new
                      opportunities. Let’s get in touch!
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="follow mb-4">
                <div className="d-flex justify-content-center mb-2">
                  <h2>
                    Follow <br className="br" /> me on
                  </h2>
                  <div className="line-footer"></div>
                </div>
                <div className="follow-content mt-2">
                  <div>
                    <a href="https://twitter.com/ronjozkeddely" target="_blank">
                      Twitter
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/ryann254" target="_blank">
                      Github
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/ryan-n-3a81a9198"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </Row>
        <Row>
          <Col>
            <div className="post-footer d-flex justify-content-center justify-content-md-start mt-2">
              <Link to="/homepage">
                <div className="brand logo">RN</div>
              </Link>
              <div className="footer-text d-flex">
                &copy;
                <div className="date" id="date"></div>
                <div className="date">Ryan Njoroge</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
