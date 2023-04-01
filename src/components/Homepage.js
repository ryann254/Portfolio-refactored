import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Fade from 'react-reveal/Fade';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useQuery } from '@apollo/client';

import Header from './Header';
import Footer from './Footer';
import './Homepage.scss';
import ProfilePic from '../../public/images/Profile-replacement3-min.webp';
import WeddingTemplate from '../../public/images/Wedding-template.webp';
import BakeryTemplate from '../../public/images/Bakery template.webp';
import LawTemplate from '../../public/images/Law-template.webp';
import Estimatorapp from '../../public/images/Estimator-app.webp';
import Expenseapp from '../../public/images/Expense-app.webp';
import Fancyform from '../../public/images/Fancy-form.webp';
import Homefurniture from '../../public/images/Home-furniture.webp';
import Netflix from '../../public/images/Netflix.webp';
import Messenger from '../../public/images/Messenger-app-coverphoto.webp';
import isEmpty from '../helpers/isEmpty';
import INTRO_QUERY from '../graphql/intro';
import { useDispatch, useSelector } from 'react-redux';
import { addBioContent, addBioIntro } from '../redux/action-creator';
import PORTFOLIO_IMAGES_QUERY from '../graphql/portfolio';

function Homepage() {
  const [name, setUserName] = useState('');
  const [intro, setIntro] = useState({ jobTitle: '', titleDescription: '' });
  const dispatch = useDispatch();
  const { bioIntro, bioContent } = useSelector((state) => state.about);
  const [imageData, setImageData] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    lazyLoad: 'ondemand',
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
    lazyLoad: 'ondemand',
    arrows: true,
  };

  function getLoggedInUser() {
    const details = JSON.parse(localStorage.getItem('okta-token-storage'));
    if (!isEmpty(details)) {
      setUserName(details.idToken.claims.name);
    }
  }

  const { loading, error, data: introData } = useQuery(INTRO_QUERY);
  const {
    loading: imagesLoading,
    error: imagesError,
    data: images,
  } = useQuery(PORTFOLIO_IMAGES_QUERY);

  useEffect(() => {
    if (!loading && !error) {
      setIntro(introData.intros[0]);
      dispatch(addBioIntro(introData.bioIntros[0].intro));
      dispatch(addBioContent(introData.bioBodies));
    }

    if (!imagesLoading && !imagesError) {
      setImageData(images.portfolioImages);
    }
    getLoggedInUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, imagesLoading]);

  if (loading || imagesLoading) return <h1>Loading...</h1>;
  if (error || imagesError) return <h1>Error!</h1>;
  return (
    <Fragment>
      <Header />
      <Container className='homepage'>
        <Row>
          <Col className='my-auto mr-auto' md={6}>
            <div className='left'>
              <div className='middle'>
                <div className='sm-header'>Ryan Njoroge</div>
                <div className='lg-header mb-3'>
                  {intro.jobTitle}
                  <br className='br' />
                  <span className='pl-2'></span>
                </div>
                <div className='content mb-3'>{intro.titleDescription}</div>
                <div className='homepage-links d-sm-flex justify-content-center'>
                  <Link to='/work' className='link-projects mr-1 mr-sm-2'>
                    View Projects
                  </Link>{' '}
                  <span>|</span>{' '}
                  <a
                    href='https://www.fuzu.com/profile/ryan-njoroge'
                    target='_blank'
                    className='link-read mr-1 ml-1 ml-sm-2 mr-sm-2'
                  >
                    Link to my Resume
                  </a>
                  <span>|</span>{' '}
                  <Link to='/about' className='link-read ml-1 ml-sm-2'>
                    Read Some More
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col className='ml-auto pr-md-0' md={6} lg={5}>
            <div className='projects'>
              <Row className='smaller-screens'>
                <div className='projects-header d-flex-column'>
                  <div className='lg-header text-capitalize text-center mb-5'>
                    Some of my projects
                  </div>
                  <Col className='mb-3'>
                    <Fade bottom>
                      <div className='item'>
                        <a
                          href='https://ecstatic-colden-597ec2.netlify.app/'
                          target='_blank'
                        >
                          <img
                            src={Messenger}
                            alt='messenger'
                            className='img-fluid'
                          />
                        </a>
                      </div>
                    </Fade>
                  </Col>
                  <Col className='mb-3'>
                    <Fade bottom>
                      <div className='item'>
                        <a
                          href='https://compassionate-einstein-9ec9cd.netlify.app/'
                          target='_blank'
                        >
                          <img
                            src={WeddingTemplate}
                            alt='wedding'
                            className='img-fluid'
                          />
                        </a>
                      </div>
                    </Fade>
                  </Col>
                  <Col className='mb-3'>
                    <Fade bottom>
                      <div className='item'>
                        <a
                          href='https://hardcore-tereshkova-f8d88e.netlify.app/'
                          target='_blank'
                        >
                          <img
                            src={LawTemplate}
                            alt='law'
                            className='img-fluid'
                          />
                        </a>
                      </div>
                    </Fade>
                  </Col>
                  <Col className='mb-3'>
                    <Fade bottom>
                      <div className='item'>
                        <a
                          href='https://dreamy-sammet-3a0674.netlify.app/'
                          target='_blank'
                        >
                          <img
                            src={BakeryTemplate}
                            alt='bakery'
                            className='img-fluid'
                          />
                        </a>
                      </div>
                    </Fade>
                  </Col>
                  <Col className='mb-3'>
                    <Fade bottom>
                      <div className='item'>
                        <a
                          href='https://ryann254.github.io/Ryan-Covid19-Deploy/'
                          target='_blank'
                        >
                          <img
                            src={Estimatorapp}
                            alt='estimator'
                            className='img-fluid'
                          />
                        </a>
                      </div>
                    </Fade>
                  </Col>
                  <Col className='mb-3'>
                    <Fade bottom>
                      <div className='item'>
                        <a
                          href='https://expense-tracker-frontend-001.herokuapp.com/'
                          target='_blank'
                        >
                          <img
                            src={Expenseapp}
                            alt='expenseapp'
                            className='img-fluid'
                          />
                        </a>
                      </div>
                    </Fade>
                  </Col>
                  <Col className='mb-3'>
                    <Fade bottom>
                      <div className='item'>
                        <a href='https://ryanfancyform.cf/' target='_blank'>
                          <img
                            src={Fancyform}
                            alt='fancyform'
                            className='img-fluid'
                          />
                        </a>
                      </div>
                    </Fade>
                  </Col>
                  <Col className='mb-3'>
                    <Fade bottom>
                      <div className='item'>
                        <a
                          href='https://tender-fermi-f8c720.netlify.app/'
                          target='_blank'
                        >
                          <img
                            src={Netflix}
                            alt='netflix'
                            className='img-fluid'
                          />
                        </a>
                      </div>
                    </Fade>
                  </Col>
                  <Col className='mb-3'>
                    <Fade bottom>
                      <div className='item'>
                        <a
                          href='https://trusting-wilson-8f4a95.netlify.app/'
                          target='_blank'
                        >
                          <img
                            src={Homefurniture}
                            alt='homefurniture'
                            className='img-fluid'
                          />
                        </a>
                      </div>
                    </Fade>
                  </Col>
                </div>
              </Row>
            </div>
            <div className='right-home larger-screens'>
              <div className='profile-container d-flex-column justify-content-center'>
                <div className='mb-5 d-flex justify-content-center'>
                  <img src={ProfilePic} className='profile' alt='profile' />
                </div>
                <div className='profile-content'>
                  {bioIntro && bioContent.length ? (
                    <Slider {...settings}>
                      <div>
                        <p className='show'>
                          {bioIntro}
                          <br />
                        </p>
                      </div>
                      <div>
                        <p className='show'>
                          <span className='text-secondary-paragraph'>
                            <strong>{bioContent[0].subtitle}</strong>
                          </span>
                          {bioContent[0].subtitleBody}
                          <br />
                        </p>
                      </div>
                      <div>
                        <p className='show'>
                          <span className='text-secondary-paragraph'>
                            <strong>{bioContent[1].subtitle}</strong>
                          </span>
                          {bioContent[1].subtitleBody} <br />
                        </p>
                      </div>
                      <div>
                        <p className='show'>
                          <span className='text-secondary-paragraph'>
                            <strong>{bioContent[2].subtitle}</strong>
                          </span>
                          {bioContent[2].subtitleBody} <br />
                        </p>
                      </div>
                    </Slider>
                  ) : null}
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='home-projects larger-screens'>
          <Col className='mx-auto' md={9}>
            <div className='lg-header text-capitalize text-center mb-5'>
              Some of my projects
            </div>
            <div>
              <div className='home-project-images'>
                <Slider {...projectSettings}>
                  {imageData.length ? (
                    imageData.map((image, index) => (
                      <div className='pr-4' key={index}>
                        <a href='/work'>
                          <img
                            src={image !== null ? image.jobImage.url : ''}
                            className='img-fluid wedding-home'
                            alt='Project'
                          />
                        </a>
                      </div>
                    ))
                  ) : (
                    <h4>Loading...</h4>
                  )}
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default Homepage;
