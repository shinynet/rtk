import React, {useEffect} from 'react'
import PropTypes from 'prop-types'

const EmployeeRow = ({id, name, age, salary}) => (
	<tr key={id}>
		<td>{name}</td>
		<td>{age}</td>
		<td>{salary}</td>
	</tr>
)
EmployeeRow.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	age: PropTypes.string.isRequired,
	salary: PropTypes.string.isRequired
}

const Employees = ({employees, fetchEmployees}) => {

	useEffect(() => {fetchEmployees()}, [fetchEmployees])

	return (
		<table>
			<thead>
			<tr>
				<th>Name</th>
				<th>Age</th>
				<th>Salary</th>
			</tr>
			</thead>
			<tbody>
			{employees.map(EmployeeRow)}
			</tbody>
		</table>
	)
}
Employees.propTypes = {
	employees: PropTypes.arrayOf(PropTypes.object).isRequired,
	fetchEmployees: PropTypes.func.isRequired
}

export default Employees
