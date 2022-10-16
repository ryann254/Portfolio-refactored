import { gql } from '@apollo/client';

const INTRO_QUERY = gql`
	query {
		intros {
			jobTitle
			titleDescription
		}
		bioIntros {
			intro
		}
		bioBodies {
			subtitle
			subtitleBody
		}
	}
`;

export default INTRO_QUERY;
