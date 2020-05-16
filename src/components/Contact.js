import React from "react";

import ContactForm from "./ContactForm";
import ContactPic from "../../public/images/contact/contact4-min.jpg";

function Contact() {
  return (
    <div className="contact-body">
      <main id="contact">
        <h1 className="lg-heading">
          <span className="text-secondary">Contact</span> Me
        </h1>
        <div className="contact-top">
          <img src={ContactPic} className="contact-pic" alt="contact-pic" />
          <div className="page-content">
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
        <div className="contact-middle">
          <div className="contact-left">
            <div className="sm-header">contact</div>
            <div className="lg-header">
              Get in touch<div className="line-contact"></div>
            </div>
          </div>
          <div className="contact-right">
            <div className="right-heading">
              Got a project? Drop me a line if you want to work together on
              something exciting.
              <div className="contact-form">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
