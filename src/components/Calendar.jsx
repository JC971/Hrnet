import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";


function Calendar({ startDate, handleDateChange }) {
	return (
		<DatePicker
			showIcon
			selected={startDate}
			onChange={(date) => handleDateChange(date)}
			
		/>
	);
}
Calendar.propTypes = {
	startDate: PropTypes.instanceOf(Date).isRequired,
	handleDateChange: PropTypes.func.isRequired,
};

export default Calendar;
