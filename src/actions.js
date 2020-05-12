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
// here we need a double function.
// the function goes to the middleware.
// redux-thunk first dispatches "pending" to the reducers.
// when it returns, it dispatches "success" and update the store (changes the state).
export const requestRobots = () => (dispatch) => {
	dispatch({ type: REQUEST_ROBOTS_PENDING });
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
		.catch(error => dispatch({ type: REQUEST_ROBOTS_FAIL, payload: error }))
}
