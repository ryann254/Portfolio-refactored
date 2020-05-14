import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

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
      <hr className="line-breaker"></hr>
      <div className="pre-footer">
        <div className="content-dev">Need a FrontEnd Developer?</div>
        <div className="content-work">
          <Link to="/contact">
            Let's Get To Work <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <hr className="line-breaker"></hr>
      <div className="page-footer">
        <div className="contact-info">
          <h2>
            Contact <br />
            information
          </h2>
          <div className="line-footer"></div>
          <div className="contact-content">
            <div>
              <p>Feel free to reach out at any time, through email or call.</p>
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
        <div className="project">
          <h2>
            My Recent <br /> Projects
          </h2>
          <div className="line-footer"></div>
          <div className="projects-content">
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
        <div className="availability">
          <h2>
            Current <br /> availability
          </h2>
          <div className="line-footer"></div>
          <div className="availability-content">
            <div>
              <p>
                Most of the time I'm working on a project(either personal or
                business related) but I’ll be happy to discuss new
                opportunities. Let’s get in touch!
              </p>
            </div>
          </div>
        </div>
        <div className="follow">
          <h2>
            Follow <br /> me on
          </h2>
          <div className="line-footer"></div>
          <div className="follow-content">
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
      </div>
      <div className="post-footer">
        <Link to="/homepage">
          <div className="logo-border">
            <div className="logo">R</div>
          </div>
        </Link>
        &copy; <div className="date" id="date"></div>
        <div className="date">Ryan Njoroge</div>
      </div>
    </>
  );
}

export default Footer;
