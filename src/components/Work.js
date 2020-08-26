import React from "react";
import { Zoom } from "react-reveal";

// Own Components
import Image1 from "../../public/images/projects/Estimator-app.png";
import Image2 from "../../public/images/projects/Expense-app.png";
import Image3 from "../../public/images/projects/Fancy-form.png";
import Image4 from "../../public/images/projects/Netflix.png";
import Image5 from "../../public/images/projects/Home-furniture.png";
import IconHtml from "../../public/images/icons/html-icon.png";
import IconCss from "../../public/images/icons/css-icon.png";
import IconJs from "../../public/images/icons/js-icon.png";
import IconReactjs from "../../public/images/icons/reactjs-icon.png";
import IconNodejs from "../../public/images/icons/nodejs-icon.png";
import IconAngular from "../../public/images/icons/angular-icon.png";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Work() {
  return (
    <div>
      <Container>
        <div id="work">
          <h1 className="lg-heading mb-2">
            <span className="text-secondary">My</span> Work
          </h1>
          <h2 className="sm-heading">A few of my projects....</h2>
          <div className="projects">
            <Row className="mb-5">
              <Col>
                <div className="item mb-4">
                  <a
                    href="https://ryann254.github.io/Ryan-Covid19-Deploy/"
                    target="_blank"
                  >
                    <img src={Image1} className="covid-19" alt="Project" />
                  </a>
                  <div className="technologies">
                    <img src={IconHtml} alt="icon" />
                    <img src={IconCss} alt="icon" />
                    <img src={IconJs} alt="icon" />
                  </div>
                  <div className="work-buttons">
                    <a
                      href="https://ryann254.github.io/Ryan-Covid19-Deploy/"
                      target="_blank"
                      className="btn btn-light"
                    >
                      <i className="fas fa-eye"></i> Project
                    </a>

                    <a
                      href="https://github.com/ryann254/Ryan-Covid19-Challenge"
                      target="_blank"
                      className="btn btn-dark"
                    >
                      <i className="fab fa-github"></i> Github
                    </a>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="work-content">
                  <div>
                    <h3>Covid-19 Estimator App</h3>
                  </div>
                  <div>
                    <h3>Problem:</h3>
                    <p>
                      In recent times we've been hit by a pandemic, corona
                      virus, and the main issues have been stopping the spread
                      of the virus and estimating how hard each country will be
                      hit.
                    </p>
                  </div>
                  <div>
                    <h3>Solution:</h3>
                    <p>
                      This small website helps in estimating how much money the
                      economy will lose, number of hospital beds needed and the
                      number, ventilators needed and the number of people who'll
                      be infected. This is after certain numbers are provided
                      e.g. the number of infected people at the moment, the time
                      you want to estimate(do you want to see the results after
                      a month), population and hospital beds available at the
                      moment.
                    </p>
                  </div>
                  <div>
                    <h3>Noteable Features:</h3>
                    <p>
                      On the homepage when you cursor is on the page the
                      background is focused but when you move your cursor out of
                      the page the background is no longer focused. <br />
                      On the form when you click the submit button, the
                      components slide over each other.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col>
                <div className="item mb-4">
                  <a
                    href="https://expense-tracker-frontend-001.herokuapp.com/"
                    target="_blank"
                  >
                    <img
                      src={Image2}
                      className="expense-tracker"
                      alt="Project"
                    />
                  </a>
                  <div className="technologies expense">
                    <img src={IconReactjs} alt="icon" />
                    <img src={IconNodejs} alt="icon" />
                  </div>
                  <div className="work-buttons">
                    <a
                      href="https://expense-tracker-frontend-001.herokuapp.com/"
                      target="_blank"
                      className="btn btn-light"
                    >
                      <i className="fas fa-eye"></i> Project
                    </a>

                    <a
                      href="https://github.com/ryann254/Daily-Expenditure-App-Front-End"
                      target="_blank"
                      className="btn btn-dark"
                    >
                      <i className="fab fa-github"></i> Github
                    </a>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="work-content">
                  <div>
                    <h3>Daily Expenditure App</h3>
                  </div>
                  <div>
                    <h3>Problem:</h3>
                    <p>
                      In today's world we constantly spending money hence
                      there's need to track all this spending. Yes, you can use
                      simple notebook apps to record all your transactions but
                      notebooks won't do the calculations for you and calculator
                      apps won't keep records for you.
                    </p>
                  </div>
                  <div>
                    <h3>Solution:</h3>
                    <p>
                      What if we could combine a calculator and a notebook but
                      make it simple enough that anyone can use it? This app is
                      exactly that, simple and useful. You simply state name the
                      transaction you made and then state the amount, for an
                      income you would input(+30,000 or 30,000) and for an
                      expense you would input(-30,000),the negative has to be
                      present.
                    </p>
                  </div>
                  <div>
                    <h3>Noteable Features:</h3>
                    <p>
                      When you enter a transaction and click add transaction its
                      automatically sorted as an expense or income and based on
                      that your balance is displayed at the top. This project
                      also has an active backend
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col>
                <div className="item mb-4">
                  <a href="https://ryanfancyform.cf/" target="_blank">
                    <img src={Image3} className="fancy-form" alt="Project" />
                  </a>
                  <div className="technologies">
                    <img src={IconHtml} alt="icon" />
                    <img src={IconCss} alt="icon" />
                    <img src={IconJs} alt="icon" />
                  </div>
                  <div className="work-buttons">
                    <a
                      href="https://ryanfancyform.cf/"
                      target="_blank"
                      className="btn btn-light"
                    >
                      <i className="fas fa-eye"></i> Project
                    </a>

                    <a
                      href="https://github.com/ryann254/FancyUI"
                      target="_blank"
                      className="btn btn-dark"
                    >
                      <i className="fab fa-github"></i> Github
                    </a>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="work-content">
                  <div>
                    <h3>Fancy Form</h3>
                  </div>
                  <div>
                    <h3>Design</h3>
                    <p>
                      This project does not solve any particular problem in
                      society, its just a well-designed ui for a form. It gives
                      you a different perspective on how forms can look
                    </p>
                  </div>
                  <div>
                    <h3>Noteable Features:</h3>
                    <p>
                      When you try and move to the next question without
                      submitting any data or submitting the wrong type of data,
                      there's an effect that takes place. On completing the form
                      it disappear and gives you a message.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col>
                <div className="item mb-4">
                  <a
                    href="https://tender-fermi-f8c720.netlify.app/"
                    target="_blank"
                  >
                    <img src={Image4} className="netflix-image" alt="Project" />
                  </a>
                  <div className="technologies">
                    <img src={IconAngular} alt="icon" />
                  </div>
                  <div className="work-buttons">
                    <a
                      href="https://tender-fermi-f8c720.netlify.app/"
                      target="_blank"
                      className="btn btn-light"
                    >
                      <i className="fas fa-eye"></i> Project
                    </a>

                    <a
                      href="https://github.com/ryann254/Netflix-Clone-App"
                      target="_blank"
                      className="btn btn-dark"
                    >
                      <i className="fab fa-github"></i> Github
                    </a>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="work-content">
                  <div>
                    <h3>Mini-Netflix App</h3>
                  </div>
                  <div>
                    <h3>Angular Project</h3>
                    <p>
                      This project does not solve any particular problem in
                      society, its was just a personal project to gauge my
                      skills in Angular. Its built purely using Angular however
                      its still under construction.
                    </p>
                  </div>
                  <div>
                    <h3>Noteable Features:</h3>
                    <p>
                      When you click the tabs e.g No commitments, Cancel online
                      anytime or Watch anywhere there's menu of items that
                      slides in from the right.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col>
                <div className="item mb-4">
                  <a href="https://ryanphotography.cf/" target="_blank">
                    <img className="photography" src={Image5} alt="Project" />
                  </a>
                  <div className="technologies">
                    <img src={IconHtml} alt="icon" />
                    <img src={IconCss} alt="icon" />
                    <img src={IconJs} alt="icon" />
                  </div>
                  <div className="work-buttons">
                    <a
                      href="https://ryanphotography.cf/"
                      target="_blank"
                      className="btn btn-light"
                    >
                      <i className="fas fa-eye"></i> Project
                    </a>

                    <a
                      href="https://github.com/ryann254/homefurniture"
                      target="_blank"
                      className="btn btn-dark"
                    >
                      <i className="fab fa-github"></i> Github
                    </a>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="work-content">
                  <div>
                    <h3>Homefurniture website</h3>
                  </div>
                  <div>
                    <h3>Small scale e-commerce site</h3>
                    <p>
                      This was a free lance project done under the
                      specifications of the client. It was meant to be a small
                      scale e-commerce site that would help the client reach a
                      wider customer base.
                    </p>
                  </div>
                  <div>
                    <h3>Noteable Features:</h3>
                    <p>
                      It has smooth scroll for all the navigation links and is
                      mobile responsive.It also includes a classy attractive
                      color scheme
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Work;
