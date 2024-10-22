import { useState } from "react";
import Calendar from "../components/Calendar";
import { optionsDepartements } from "../data/departments";
import { states } from "../data/states";
import Modale from "../modale";
import { useEmployeeStore } from "../store/useEmployeeStore";
import { NavLink } from "react-router-dom";

export const FormEmployee = () => {
	const { updateNewEmployee, addEmployee, newEmployee } = useEmployeeStore();
	const [dateOfBirth, setDateOfBirth] = useState(new Date());
	const [startDate, setStartDate] = useState(new Date());
	

	const handleChange = (event) => {
		const { name, value } = event.target;

		updateNewEmployee(name, value);
	};

	const handleSelectChange = (field, value) => {
		updateNewEmployee(field, value.value);
	};

	const [showModal, setShowModal] = useState(false);

	const handleDateChange = (field, date) => {
		console.log(`Rendering date for ${field}:`, date);
		if (field === "dateOfBirth") {
			setDateOfBirth(date);
		} else {
			setStartDate(date);
		}
		updateNewEmployee(field, date);
	};

	
	const saveEmployee = () => {
		addEmployee(newEmployee);
		setShowModal(true); 
	

	};

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<div className="container">
			<h1>HRnet</h1>

			<NavLink to="/list" className="nav-link">
				View Curent Employees
			</NavLink>

			<form>
				<h2>Create Employee</h2>
				<label className="label-firstName" htmlFor="firstName">
					First Name
				</label>
				<input
					id="firstName"
					name="firstName"
					onChange={handleChange}
					placeholder=""
				/>
				<label className="label-lastName" htmlFor="lastName">
					Last Name
				</label>
				<input
					id="lastName"
					name="lastName"
					onChange={handleChange}
					placeholder=""
				/>
				<label className="label-dateOfBirth" htmlFor="dateOfBirth">
					Date of Birth
				</label>

				<Calendar
					date={dateOfBirth}
					handleDateChange={(date) => handleDateChange("dateOfBirth", date)}
				/>
				<label className="label-startDate" htmlFor="startDate">
					Start Date
				</label>

				<Calendar
					date={startDate}
					handleDateChange={(date) => handleDateChange("startdate", date)}
				/>
				<div className="address-container">
					<span className="legend">Address</span>
					<label className="label-street" htmlFor="street">
						Street
					</label>
					<input
						id="street"
						name="street"
						onChange={handleChange}
						placeholder=""
					/>
					<label className="label-street" htmlFor="street">
						City
					</label>
					<input id="city" name="city" onChange={handleChange} placeholder="" />
					<label className="label-state" htmlFor="state">
						State
					</label>
					<select id="state" name="state" onChange={handleChange}>
						<option value=""></option>
						{states.map((state) => (
							<option key={state.abbreviation} value={state.abbreviation}>
								{state.name}
							</option>
						))}
					</select>
					<label className="label-zipCode" htmlFor="zipCode">
						Zip Code
					</label>
					<input
						id="zipCode"
						name="zipCode"
						onChange={handleChange}
						placeholder=""
					/>
				</div>
				<label htmlFor="departmentSelect" className="label-department">
					Department
				</label>
				<select
					id="departmentSelect"
					name="dpt"
					className="dept-select"
					onChange={(e) =>
						handleSelectChange("department", {
							value: e.target.value,
							label: e.target.options[e.target.selectedIndex].text,
						})
					}
				>
					
					{optionsDepartements.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>

				<button className="backup" type="button" onClick={saveEmployee}>
					Save
				</button>
			</form>
			<Modale isOpen={showModal} close={closeModal} />
		</div>
	);
};
