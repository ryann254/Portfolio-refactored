import React, { Fragment } from "react";
import {useSelector} from "react-redux";

// Own Components
import Homefurniture from "../../public/images/Home-furniture.webp";
import IconHtml from "../../public/images/html-icon.webp";
import IconCss from "../../public/images/css-icon.webp";
import IconJs from "../../public/images/js-icon.webp";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Work() {
  const { myWork } = useSelector(state => state.work);
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
                        <img src={work.image} className="covid-19" alt="Project" />
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
                        {work.title.includes('Covid') || work.title.includes('Daily') ? <h3>Problem:</h3>: null}
                        {work.title.includes('Homefurniture') ? <h3>Small scale e-commerce site:</h3>: null}
                      </div>
                      <div>
                        <p>
                          {work.description}
                        </p>
                      </div>
                      {work.title.includes('Covid') || work.title.includes('Daily') ? <div>
                        <h3>Solution:</h3>
                        <p>
                          {work.solution}
                        </p>
                      </div> : null}
                      {work.title.includes('React') || work.title.includes('Daily') ? <div><h3>How to use</h3> <p>{work.usage}</p></div> : null}
                      <div>
                        <h3>Noteable Features:</h3>
                        <p>
                          {work.noteableFeatures}
                        </p>
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
