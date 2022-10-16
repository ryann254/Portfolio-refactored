import {
	ADD_WORK_EDUCATION,
	ADD_EVENT_ACHIEVEMENTS,
	EVENT_OR_WORK_ADDED,
	SCROLL_TO_ELEMENT,
	CHANGE_SCROLL_STATUS,
	ADD_SINGLE_COMMENT,
	DELETE_COMMENT,
	GET_ALL_COMMENTS,
	COMMENT_DB_ERRORS,
	ADD_BIO_INTRO,
	ADD_BIO_CONTENT,
} from '../action-types';

const initialState = {
	scrollToElement: { state: false, section: '' },
	eventORWorkStatus: false,
	loading: true,
	errorsDB: [],
	bioIntro: '',
	bioContent: [],
	commentsSection: [],
};

function AboutReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_BIO_INTRO:
			return {
				...state,
				bioIntro: action.payload,
			};
		case ADD_BIO_CONTENT:
			return {
				...state,
				bioContent: action.payload,
			};
		case ADD_SINGLE_COMMENT:
			return {
				...state,
				commentsSection: [action.payload, ...state.commentsSection],
			};
		case GET_ALL_COMMENTS:
			return {
				...state,
				loading: false,
				commentsSection: action.payload,
			};

		case COMMENT_DB_ERRORS:
			return {
				...state,
				loading: false,
				errorsDB: action.payload,
			};
		case EVENT_OR_WORK_ADDED:
			return {
				...state,
				eventORWorkStatus: !state.eventORWorkStatus,
			};
		case SCROLL_TO_ELEMENT:
			return {
				...state,
				scrollToElement: action.payload,
			};
		case CHANGE_SCROLL_STATUS:
			return {
				...state,
				scrollToElement: { ...state.scrollToElement, state: false },
			};
		case DELETE_COMMENT:
			return {
				...state,
				commentsSection: [
					...state.commentsSection.filter(
						(comment) => comment._id !== action.payload
					),
				],
			};
		default:
			return state;
	}
}

export default AboutReducer;
