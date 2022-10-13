/* eslint-disable no-fallthrough */
import { ADD_JOBS } from '../action-types';

const initialState = {
	myWork: [],
};

function WorkReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_JOBS:
			return {
				...state,
				myWork: action.payload,
			};

		default:
			return state;
	}
}

export default WorkReducer;
