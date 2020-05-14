import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "./HomepageRefactor.scss";
import ProfilePic from "../../../public/images/Profile-replacement3-min.jpg";
import Header from "../Header";
import Footer from "../Footer";

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
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="left">
          <div className="middle">
            <div className="sm-header">Ryan Njoroge</div>
            <div className="lg-header">
              Web Developer, AI Enthusiast
              <br />
              and Critical Thinker
            </div>
            <div className="content">
              Lorem ipsum dolor sit amet, elit nisl mauris, neque porta id nunc
              nulla urna. Scelerisque pharetra pretium, sagittis metus phasellus
              velit diam, ut eu et pellentesque urna mus mi, dui risus
              ullamcorper mi tincidunt vivamus. Suspendisse mauris, adipiscing
              ac, sit etiam nulla duis felis. Eu auctor et in pretium nascetur
              turpis, diam eleifend vehicula tempus pretium orci. Enim aliquam
              amet at molestie, nulla vitae eu proin pede lacus, dolor eget eu
              erat sed, suspendisse leo, in anim. Duis aliquam tortor, felis
              lectus massa nulla, id
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
        <div className="right">
          <div className="profile-container">
            <div>
              <img src={ProfilePic} className="profile" alt="profile" />
            </div>
            <div className="profile-content">
              <Slider {...settings}>
                <div>
                  <p className="show">
                    My life has been a roller coaster ride, its has had its ups
                    and downs, some glorious moments here and there. But I'm not
                    here to bore you with the details. <br />
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
                    great joy or relief, depending on the situation, to as many
                    people as possible. Making the world a little bit more
                    tolerable. <br />
                  </p>
                </div>
                <div>
                  <p className="show">
                    <span className="text-secondary-paragraph">
                      <strong>How I will achieve this dream: </strong>
                    </span>{" "}
                    My first goal was to learn web development as it peaked my
                    interests. All while trying to achieve my ultimate goal
                    which is to learn AI and create something with it that could
                    benefit as many people as possible. <br />
                  </p>
                </div>
                <div>
                  <p className="show">
                    <span className="text-secondary-paragraph">
                      <strong>What I'm doing right now: </strong>
                    </span>{" "}
                    I'm now in JKUAT university pursuing my degree in Innovation
                    and technology management and also interning at Softsearch
                    Limited as front-end developer. I'm also learning how to
                    intergrate AI with web development
                  </p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="special-footer">
        <Footer />
      </div>
    </>
  );
}

export default HomepageRefactor;
