import {connect} from 'react-redux'
import {employeesSelector, fetchEmployees} from './store/employees'
import Employees from './Employees'

const mapStateToProps = ({employees}) => ({
	employees: employeesSelector(employees)
})

const mapDispatchToProps = {fetchEmployees}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Employees)
