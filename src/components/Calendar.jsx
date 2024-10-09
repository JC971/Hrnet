import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";

function Calendar({ date, handleDateChange }) {
	
	return (
		<DatePicker
			showIcon
			selected={date || new Date}
			//onChange={(date) => handleDateChange(date)}
			onChange={handleDateChange}
			className="style-datePicker"
			dateFormat="dd/MM/yyyy"
		/>
	);
}
Calendar.propTypes = {
	date: PropTypes.instanceOf(Date).isRequired,
	handleDateChange: PropTypes.func.isRequired,
};

export default Calendar;
