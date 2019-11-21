import {http} from '../../http'
import {createSelector, createSlice} from '@reduxjs/toolkit'

const initialState = {
	list: [],
	pendingFetch: false,
	error: ''
}

/**
 * Equivalent to the traditional reducer but:
 * - no switch statement
 * - no action constants
 * - able to apply updates in a mutable way
 */
const reducers = {
	fetchEmployeesRequest(state) {
		state.pendingFetch = true
	},
	fetchEmployeesSuccess(state, {payload}) {
		state.list = payload
		state.pendingFetch = false
	},
	fetchEmployeesFailure(state, {payload}) {
		state.error = payload.message
		state.pendingFetch = false
	}
}

/**
 * createSlice takes the initialState and reducers and returns an object containing:
 * - auto generated action creators
 * - a derived reducer function that doesn't mutate state
 */
const {actions, reducer} = createSlice({
	name: 'employees',
	initialState,
	reducers
})

/**
 * Reselect comes bundled (and re-exported)
 * for creating memoized state selectors.
 */
export const employeesSelector = createSelector(
	({list}) => list,
	employees => employees.map(({
		id,
		employee_name: name,
		employee_age: age,
		employee_salary: salary
	}) => ({id, name, age, salary}))
)

/**
 * Destructure the action creators for easier access
 */
const {
	fetchEmployeesRequest,
	fetchEmployeesSuccess,
	fetchEmployeesFailure
} = actions

/**
 * Redux-thunk comes bundled and pre-configured
 * for creating asynchronous actions.
 */
export const fetchEmployees = () => dispatch => {
	dispatch(fetchEmployeesRequest())
	http.get('employees')
		.then(({data}) => dispatch(fetchEmployeesSuccess(data)))
		.catch(({message}) => dispatch(fetchEmployeesFailure(message)))
}

export default reducer
