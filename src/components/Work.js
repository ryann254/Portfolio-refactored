import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Own Components
import ThreejsKeyboard from '../../public/images/Threejs keyboard project.webp';
import NftMarketPlace from '../../public/images/pancake swap project.webp';
import tecHive from '../../public/images/techive website - 2.webp';
import Park254 from '../../public/images/PARK_254_1000x400-01.svg';
import SalonApp from '../../public/images/welcome.webp';
import DonationWebsite from '../../public/images/portfolio-website.webp';
import EdmundEastField from '../../public/images/edumund-eastfield.PNG';
import EstimatorApp from '../../public/images/Estimator-app.webp';
import ReactMessenger from '../../public/images/Messenger-app-coverphoto.webp';
import WeddingTemplate from '../../public/images/Wedding-template.webp';
import DailyExpenditureApp from '../../public/images/Expense-app.webp';
import Backery from '../../public/images/Bakery template.webp';
import FancyForm from '../../public/images/Fancy-form.webp';
import Footer from './Footer';
import { useQuery } from '@apollo/client';
import JOBS_QUERY from '../graphql/jobs';
import { useEffect, useState } from 'react';

function Work() {
	// Projects without the problem subtitle.
	const withoutChallenge = [
		'React Messenger',
		'Wedding Planner Template',
		'Bakery Template',
		'Fancy Form',
	];

	const [portfolioJobs, setPortfolioJobs] = useState([]);

	const { loading, error, data } = useQuery(JOBS_QUERY);
	useEffect(() => {
		if (!loading && !error) {
			setPortfolioJobs(data.portfolioJobs);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading]);

	if (loading) return <h1>Loading...</h1>;
	if (error) return <h1>Error!</h1>;

	return (
		<Fragment>
			<Container>
				<div id='work'>
					<h1 className='lg-heading mb-2'>
						<span className='text-secondary'>My</span> Work
					</h1>
					<h2 className='sm-heading'>A few of my projects....</h2>
					<div className='projects'>
						{portfolioJobs.length ? (
							portfolioJobs.map((job, index) => (
								<Row className='mb-5' key={job.id}>
									<div className='d-flex-column d-md-flex'>
										<Col>
											<div className='item mb-4'>
												<a href={job.netlifyLink} target='_blank'>
													<img
														src={job.jobImage.url}
														className={
															job.title === 'Salon App'
																? 'salon covid-19'
																: 'covid-19'
														}
														alt='Project'
													/>
												</a>
												<div className='job-buttons'>
													<a
														href={job.netlifyLink}
														target='_blank'
														className='btn btn-light'
													>
														<i className='fas fa-eye pr-1'></i> Project
													</a>

													<a
														href={job.githubLink}
														target='_blank'
														className='btn btn-dark'
													>
														<i className='fab fa-github pr-1'></i> Github
													</a>
												</div>
											</div>
										</Col>
										<Col>
											<div className='job-content'>
												<div>
													<h3>{job.title}</h3>
													{!withoutChallenge.includes(job.title) ? (
														<h3>Challenge:</h3>
													) : null}
													{job.title.includes('Homefurniture') ? (
														<h3>Small scale e-commerce site:</h3>
													) : null}
												</div>
												<div>
													<p>{job.description}</p>
												</div>
												{job.solution !== undefined ? (
													<div>
														<h3>Solution:</h3>
														<p>{job.solution}</p>
													</div>
												) : null}
												{job.title.includes('React') ||
												job.title.includes('Daily') ? (
													<div>
														<h3>How to use</h3> <p>{job.usage}</p>
													</div>
												) : null}
												<div>
													<>
														{job.noteableFeatures !== undefined ? (
															<>
																<h3>Noteable Features:</h3>
																<p>{job.noteableFeatures}</p>
															</>
														) : (
															<></>
														)}

														<h3>Languages:</h3>
														<p>{job.languages}</p>
													</>
												</div>
											</div>
										</Col>
									</div>
								</Row>
							))
						) : (
							<div>Loading...</div>
						)}
					</div>
				</div>
			</Container>
			<Footer />
		</Fragment>
	);
}

export default Work;
