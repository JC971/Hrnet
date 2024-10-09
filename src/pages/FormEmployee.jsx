import { useState } from "react";
import Select from "react-select";
import Calendar from "../components/Calendar";
import { optionsDepartements } from "../data/departments";
import { states } from "../data/states";
import Modale from "../modale";
import { useEmployeeStore } from "../store/useEmployeeStore";
import { NavLink } from "react-router-dom";

export const FormEmployee = () => {
	const { updateNewEmployee, addEmployee, newEmployee } = useEmployeeStore();
	const [dateOfBirth, setDateOfBirth] = useState(null);
	const [startDate, setStartDate] = useState(null);
	//const [error, setError] = useState('');

	const handleChange = (event) => {
		const { name, value } = event.target;

		updateNewEmployee(name, value);
	};

	const handleSelectChange = (field, value) => {
		updateNewEmployee(field, value.value);
	};

	const [showModal, setShowModal] = useState(false);

	const handleDateChange = (field, date) => {
		if (field === "dateOfBirth") {
			setDateOfBirth(date);
		} else {
			setStartDate(date);
		}
		updateNewEmployee(field, date);
	};

	// Sauvegarder un nouvel employé dans localStorage
	const saveEmployee = () => {
		// TODO check error

		addEmployee(newEmployee);
		setShowModal(true); //ouverture de la modale après enreg
	};

	const closeModal = () => {
		setShowModal(false);
	};

	// TODO ajouter le lien vers la page de la liste

	return (
		<div className="container">
			<h1>HRnet</h1>
			{/*ICI LIEN */}
			<NavLink to="/list" className="nav-link">
				Tableau des employees
			</NavLink>

			<form>
				<label className="label-firstName" htmlFor="firstName">
					First Name
				</label>
				<input name="firstName" onChange={handleChange} placeholder="" />
				<label className="label-lastName" htmlFor="lastName">
					Prénom
				</label>
				<input
					name="lastName"
					onChange={handleChange}
					placeholder="Last Name"
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
					handleDateChange={(startDate) =>
						handleDateChange("startDate", startDate)
					}
				/>

				<Select
					options={optionsDepartements}
					onChange={(value) => {
						console.log({ value });

						handleSelectChange("department", value);
					}}
				/>

				<input name="street" onChange={handleChange} placeholder="Street" />
				<input name="city" onChange={handleChange} placeholder="City" />
				<select name="state" onChange={handleChange}>
					<option value="">Selected State</option>
					{states.map((state) => (
						<option key={state.abbreviation} value={state.abbreviation}>
							{state.name}
						</option>
					))}
				</select>
				<input name="zipCode" onChange={handleChange} placeholder="Zip Code" />
				<button type="button" onClick={saveEmployee}>
					Save Employees
				</button>
			</form>
			<Modale isOpen={showModal} close={closeModal} />
		</div>
	);
};
