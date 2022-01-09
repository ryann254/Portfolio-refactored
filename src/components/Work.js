import React, { Fragment } from "react";
import {useSelector} from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Own Components
import ThreejsKeyboard from '../../public/images/Threejs keyboard project.webp'
import NftMarketPlace from '../../public/images/pancake swap project.webp'
import tecHive from '../../public/images/techive website - 2.webp'
import SalonApp from '../../public/images/welcome.webp'
import DonationWebsite from '../../public/images/portfolio-website.webp'
import EdmundEastField from '../../public/images/edumund-eastfield.png'
import EstimatorApp from '../../public/images/Estimator-app.webp'
import ReactMessenger from '../../public/images/Messenger-app-coverphoto.webp'
import WeddingTemplate from '../../public/images/Wedding-template.webp'
import DailyExpenditureApp from '../../public/images/Expense-app.webp'
import Backery from '../../public/images/Bakery template.webp'
import FancyForm from '../../public/images/Fancy-form.webp'
import Footer from "./Footer";


function Work() {
  const { myWork } = useSelector(state => state.work);
  const projectImages = [ThreejsKeyboard, NftMarketPlace, tecHive, SalonApp, DonationWebsite, EdmundEastField, EstimatorApp, ReactMessenger, WeddingTemplate, DailyExpenditureApp, Backery, FancyForm]
  // Projects without the problem subtitle.
  const withoutChallenge = ['React Messenger', 'Wedding Planner Template', 'Bakery Template', 'Fancy Form']
  return (
    <Fragment>
      <Container>
        <div id="work">
          <h1 className="lg-heading mb-2">
            <span className="text-secondary">My</span> Work
          </h1>
          <h2 className="sm-heading">A few of my projects....</h2>
          <div className="projects">
            {myWork && myWork.map((work, index) => (
              <Row className="mb-5" key={index}>
                <div className="d-flex-column d-md-flex">
                  <Col>
                    <div className="item mb-4">
                      <a
                        href={work.netlifyLink}
                        target="_blank"
                      >
                        <img src={projectImages[index]} className={work.title === 'Salon App' ? 'salon covid-19' : 'covid-19'} alt="Project" />
                      </a>
                      <div className="technologies">
                        {work.technologies && work.technologies.map((technology, index) => (
                            <img key={index} src={technology} alt="icon" />
                        ))}
                      </div>
                      <div className="work-buttons">
                        <a
                          href={work.netlifyLink}
                          target="_blank"
                          className="btn btn-light"
                        >
                          <i className="fas fa-eye pr-1"></i> Project
                        </a>

                        <a
                          href={work.githubLink}
                          target="_blank"
                          className="btn btn-dark"
                        >
                          <i className="fab fa-github pr-1"></i> Github
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="work-content">
                      <div>
                        <h3>{work.title}</h3>
                        {!withoutChallenge.includes(work.title) ? <h3>Challenge:</h3>: null}
                        {work.title.includes('Homefurniture') ? <h3>Small scale e-commerce site:</h3>: null}
                      </div>
                      <div>
                        <p>
                          {work.description}
                        </p>
                      </div>
                      {work.solution !== undefined ? <div>
                        <h3>Solution:</h3>
                        <p>
                          {work.solution}
                        </p>
                      </div> : null}
                      {work.title.includes('React') || work.title.includes('Daily') ? <div><h3>How to use</h3> <p>{work.usage}</p></div> : null}
                      <div>
                        {work.noteableFeatures !== undefined ? (
                          <>
                            <h3>Noteable Features:</h3>
                            <p>
                              {work.noteableFeatures}
                            </p>
                          </>
                        ): 
                        <>
                          <h3>Languages:</h3>
                          <p>
                            {work.languages}
                          </p>
                        </>
                        }
                      </div>
                    </div>
                  </Col>
                </div>
              </Row>
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default Work;
