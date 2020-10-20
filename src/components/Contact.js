import React, { Fragment } from "react";

import ContactForm from "./ContactForm";
import Footer from "./Footer";
import ContactPic from "../../public/images/contact4-min.webp";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contact() {
  return (
    <Fragment>
      <Container>
        <div id="contact">
          <h1 className="lg-heading mb-2">
            <span className="text-secondary">Contact</span> Me
          </h1>
          <Row>
            <Col>
              <div className="contact-top">
                <img
                  src={ContactPic}
                  width="640"
                  height="360"
                  className="contact-pic"
                  alt="contact-pic"
                />
                <div className="page-content larger-screens">
                  <span className="content-words">Let's</span>
                  <br /> <span className="content-words">get</span>
                  <br /> <span className="content-words">to</span>
                  <br />{" "}
                  <span className="content-words">
                    wor<span className="one-letter">k</span>
                  </span>
                  <br />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <div className="contact-middle d-flex-column d-md-flex">
              <Col md={5} className="d-xl-flex justify-content-start">
                <div className="contact-left mt-5">
                  <div className="sm-header">contact</div>
                  <div className="lg-header d-flex">
                    <div>Get in touch</div>
                    <div className="line-contact my-auto"></div>
                  </div>
                </div>
              </Col>
              <Col md={7} className="d-xl-flex justify-content-center">
                <div className="contact-right mt-5">
                  <div className="right-heading">
                    Got a project? Drop me a line if you want to work together
                    on something exciting.
                    <div className="contact-form">
                      <ContactForm />
                    </div>
                  </div>
                </div>
              </Col>
            </div>
          </Row>
        </div>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default Contact;
