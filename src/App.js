import React from 'react';
import { BrowserRouter } from 'react-router-dom';

//Own Components
import './App.css';
import Routes from './Routes';
import PageLoader from './page-loader/PageLoader';

function App() {
	// Fix the comment backend issue.
	// Making the api call
	// async function getComments() {
	// const api = new Api();
	// try {
	// 	// const res = await api.auth().getCommentsCall();
	// 	if (res.status === 200) {
	// 		const { data } = res.data;
	// 		data.map((element) => {
	// 			element.radio = 'comments';
	// 		});

	// 		dispatch(getAllComments(data));
	// 	}
	// } catch (error) {
	// 	console.log({ error });
	// 	if (isEmpty(error) !== true) {
	// 		console.log('Isempty is not working');
	// 		const dbErrors = error.response.data.error;
	// 		dispatch(getErrors(dbErrors));
	// 	}
	// }
	// }

	// useEffect(() => {
	// 	// getComments();
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);
	return (
		<React.Suspense fallback={<PageLoader />}>
			<BrowserRouter>
				<div className='App'>
					<Routes />
				</div>
			</BrowserRouter>
		</React.Suspense>
	);
}

export default App;
