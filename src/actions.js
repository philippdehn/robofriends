// constants have to be created in constants.js and imported here.
// the actions have to be created here and later have to be imported in reducers.js.

import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAIL
} from './constants.js'

// synchronous actions can have a type (= constant) and a payload (= requested change).
export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

// assynchronous actions are more complex.
export const requestRobots = () => (dispatch) => {
	// first dispatch to reducers with type pending (= constant).
	dispatch({ type: REQUEST_ROBOTS_PENDING });
	// get the information from the api link.
	fetch('https://jsonplaceholder.typicode.com/users')
		// evaluate the response in json format.
		.then(response => response.json())
		// if there was data received, dispatch to reducers with type success and the received data as payload (= requested change).
		.then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
		// if there was an error received, dispatch to reducers with type fail and the received error as payload.
		.catch(error => dispatch({ type: REQUEST_ROBOTS_FAIL, payload: error }))
}
