// constants have to be created in constants.js and imported here.
// the reducers have to be created here and later have to be imported in index.js.

import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAIL
} from './constants.js';



// this reducer worries about searching robots.
// it has a initial state (search field is empty).
// if there is a action with the correct type, the state gets updated with the payload.

const initialStateSearch = {
	searchField: ''
}

export const searchRobots = (state=initialStateSearch, action={}) => {
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, { searchField: action.payload })
		default:
			return state;
	}
}

// this reducer worries about requesting robots
// it has a initial state (robots is empty).
// as it is assynchronous, it also has an initial state for isPending and error.
// if there is a action with the correct type (= REQUEST_ROBOTS_x) the object is updated.
// with the first call (pending), the state is set to pending.
// with the second call (success or fail), the state is set to not pending and either the data or the error is returned.


const initialStateRobots = {
	isPending: false,
	robots: [],
	error: ''
}

export const requestRobots = (state=initialStateRobots, action={}) => {
	switch(action.type) {
		case REQUEST_ROBOTS_PENDING:
			return Object.assign({}, state, { isPending: true })
		case REQUEST_ROBOTS_SUCCESS:
			return Object.assign({}, state, { robots: action.payload, isPending: false })
		case REQUEST_ROBOTS_FAIL:
			return Object.assign({}, state, { error: action.payload, isPending: false })
		default:
			return state;
	}
}