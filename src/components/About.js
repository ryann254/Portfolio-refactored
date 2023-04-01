import React, { useState, Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import randomcolor from 'randomcolor';

import Api from '../services/network';
import ProfilePic from '../../public/images/Profile-replacement1-min.webp';
import './About.css';
import Footer from './Footer';
import {
  addBioContent,
  addBioIntro,
  changeScrollStatus,
  deleteComment,
  getErrors,
} from '../redux/action-creator';
import { useQuery } from '@apollo/client';
import INTRO_QUERY from '../graphql/intro';
import ABOUT_QUERY from '../graphql/about';

function About() {
  const { commentsSection, scrollToElement, bioIntro, bioContent } =
    useSelector((state) => state.about);

  const dispatch = useDispatch();
  const [buttonState, setState] = useState(false);
  const [workandEvents, setWorkandEvents] = useState({ work: [], events: [] });

  function doneResizing(id, offsetTop) {
    if (window.Modernizr.mq('screen and (min-width:768px)')) {
      if (offsetTop === '') {
        let offsetTop = 130;
        scrollFunction(id, offsetTop);
      } else {
        scrollFunction(id, offsetTop);
      }
    } else if (window.Modernizr.mq('screen and (max-width: 767px)')) {
      if (offsetTop === '') {
        let offsetTop = 500;
        scrollFunction(id, offsetTop);
      } else {
        scrollFunction(id, offsetTop);
      }
    }
  }

  function scrollFunction(id, addTop) {
    let offsetTop = document.getElementById(`${id}`).offsetTop;
    console.log(addTop);
    window.scrollTo({
      top: offsetTop + addTop,
      behavior: 'smooth',
    });
    dispatch(changeScrollStatus());
  }

  const handleClick = () => {
    const jobElement = document.getElementsByClassName('comment');

    let element = 0;
    for (element; element < jobElement.length; element++) {
      jobElement[element].classList.add('delete');
    }
    setState((buttonState) => !buttonState);
  };

  async function deleteComments(id) {
    const api = new Api();
    try {
      const res = await api.auth().deleteCommentCall(id);
      dispatch(deleteComment(id));
    } catch (error) {
      const dbErrors = error.response.data.error;
      dispatch(getErrors(dbErrors));
    }
  }

  useEffect(() => {
    if (scrollToElement.state === true) {
      if (
        scrollToElement.section !== '' &&
        scrollToElement.section === 'work'
      ) {
        doneResizing('work-section');
      } else if (
        scrollToElement.section !== '' &&
        scrollToElement.section === 'events'
      ) {
        let offsetTop = 1300;
        doneResizing('events-section', offsetTop);
      } else {
        let offsetTop = -130;
        doneResizing('comments-section', offsetTop);
      }
    }
  }, [scrollToElement]);

  const { loading, error, data } = useQuery(INTRO_QUERY);
  const about = useQuery(ABOUT_QUERY);

  useEffect(() => {
    if (!bioContent.length && !bioIntro) {
      if (!loading && !error) {
        dispatch(addBioIntro(data.bioIntros[0].intro));
        dispatch(addBioContent(data.bioBodies));
      }
    }

    if (!about.loading && !about.error) {
      setWorkandEvents({
        work: about.data.workAndEducations,
        events: about.data.eventsAndAchievements,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, about.loading]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error!</h1>;
  return (
    <Fragment>
      <Container>
        <div id='about'>
          <h1 className='lg-heading mb-2'>
            <span className='text-secondary'>About</span> Me
          </h1>
          <h2 className='sm-heading'>Let me mention just a few...</h2>
          <div className='about-info'>
            <Row>
              <div className='image-bio d-flex-column d-md-flex'>
                <Col md={6} className='profile-pic my-auto'>
                  <Bounce right>
                    <div className='d-flex justify-content-center'>
                      <img
                        src={ProfilePic}
                        width={280}
                        height={280}
                        alt='Bio'
                        className='bio-image'
                      />
                    </div>
                  </Bounce>
                </Col>
                <Col md={6} className='mx-auto mt-5'>
                  {bioIntro && bioContent.length ? (
                    <div className='bio'>
                      <h3 className='text-secondary'>BIO</h3>
                      <p className='show'>
                        {bioIntro}
                        <br />
                        <span className='text-secondary-paragraph'>
                          <strong>{bioContent[0].subtitle}</strong>
                        </span>
                        {bioContent[0].subtitleBody}
                        <br />
                        <span className='text-secondary-paragraph'>
                          <strong>{bioContent[1].subtitle}</strong>
                        </span>
                        {bioContent[1].subtitleBody} <br />
                        <span className='text-secondary-paragraph'>
                          <strong>{bioContent[2].subtitle}</strong>
                        </span>
                        {bioContent[2].subtitleBody} <br />
                      </p>
                    </div>
                  ) : null}
                </Col>
              </div>
            </Row>
            <h2 className='sm-heading work'>Work and Education</h2>
            <Zoom>
              <div className='work-education d-flex mb-5' id='work-section'>
                <Row>
                  {workandEvents.work.length
                    ? workandEvents.work.map((item, index) => (
                        <Col key={index} md={6} lg={4} className='mb-4'>
                          <div className='job' key={index}>
                            <div className='d-flex'>
                              <div
                                className='identify'
                                style={{
                                  background: randomcolor({
                                    luminosity: 'dark',
                                    format: 'rgba',
                                    alpha: 0.7,
                                  }),
                                }}
                              >
                                {item.title !== ''
                                  ? item.title.slice(0, 1).toUpperCase()
                                  : null}
                              </div>
                              <div>
                                <h3 className='mt-2 work-title'>
                                  {item.title}
                                </h3>
                                <h4>{item.subtitle}</h4>
                              </div>
                            </div>

                            <p>{item.body}</p>
                          </div>
                        </Col>
                      ))
                    : null}
                </Row>
              </div>
            </Zoom>
            <div className='headings'>
              <h2 className='sm-heading work'>Events and Achievements</h2>
            </div>
            <Zoom>
              <div
                className='work-education d-flex mx-auto'
                id='events-section'
              >
                <Row>
                  {workandEvents.events.length
                    ? workandEvents.events.map((item, index) => (
                        <Col key={index} md={6} lg={4} className='mb-4'>
                          <div className='job' key={index}>
                            <div className='d-flex'>
                              <div
                                className='identify'
                                style={{
                                  background: randomcolor({
                                    luminosity: 'dark',
                                    format: 'rgba',
                                    alpha: 0.7,
                                  }),
                                }}
                              >
                                {item.title !== ''
                                  ? item.title.slice(0, 1).toUpperCase()
                                  : null}
                              </div>
                              <div>
                                <h3 className='mt-2 work-title'>
                                  {item.title}
                                </h3>
                                <h4>{item.subtitle}</h4>
                              </div>
                            </div>
                            <p>{item.body}</p>
                          </div>
                        </Col>
                      ))
                    : console.log('Loading')}
                </Row>
              </div>
            </Zoom>
          </div>
        </div>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default About;
