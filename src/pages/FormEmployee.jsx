import { useState } from "react";
import Calendar from "../components/Calendar";
import { optionsDepartements } from "../data/departments";
import { states } from "../data/states";
import { useEmployeeStore } from "../store/useEmployeeStore";
import { NavLink } from "react-router-dom";





export const FormEmployee = () => {
	const { addEmployee } = useEmployeeStore();

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [dateOfBirth, setDateOfBirth] = useState(null);
	const [startDate, setStartDate] = useState(null);
	const [street, setStreet] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [department, setDepartment] = useState("");
	const [showModal, setShowModal] = useState(false);

	const openModal = () => setShowModal(true);
	const closeModal = () => setShowModal(false);

	const saveEmployee = (e) => {
		e.preventDefault();

		const newEmployee = {
			firstName,
			lastName,
			dateOfBirth,
			startDate,
			street,
			city,
			state,
			zipCode,
			department,
		};

		addEmployee(newEmployee);

		openModal();
		resetForm();
	};

	const resetForm = () => {
		setFirstName("");
		setLastName("");
		setDateOfBirth(null);
		setStartDate(null);
		setStreet("");
		setCity("");
		setState("");
		setZipCode("");
		setDepartment("");
	};

	return (
		<div className="container">
			<h1>HRnet</h1>

			<NavLink to="/list" className="nav-link">
				View Current Employees
			</NavLink>

			<form onSubmit={saveEmployee}>
				<h2 className="employeeCreation" >Create Employee</h2>

				<label htmlFor="firstName">First Name</label>
				<input
					id="firstName"
					name="firstName"
					onChange={(e) => setFirstName(e.target.value)}
					value={firstName}
					required
				/>

				<label htmlFor="lastName">Last Name</label>
				<input
					id="lastName"
					name="lastName"
					onChange={(e) => setLastName(e.target.value)}
					value={lastName}
					required
				/>

				<label htmlFor="dateOfBirth">Date of Birth</label>
				<Calendar
					date={dateOfBirth}
					handleDateChange={(date) =>
						setDateOfBirth(date ? date.toISOString() : "")
					}
				/>

				<label htmlFor="startDate">Start Date</label>
				<Calendar
					date={startDate}
					handleDateChange={(date) =>
						setStartDate(date ? date.toISOString() : "")
					}
				/>

				<div className="address-container">
					<span className="legend">Address</span>
					<label htmlFor="street">Street</label>
					<input
						id="street"
						name="street"
						onChange={(e) => setStreet(e.target.value)}
						value={street}
					/>

					<label htmlFor="city">City</label>
					<input
						id="city"
						name="city"
						onChange={(e) => setCity(e.target.value)}
						value={city}
					/>

					<label htmlFor="state">State</label>
					<select
						id="state"
						name="state"
						onChange={(e) => setState(e.target.value)}
						value={state}
					>
						<option value=""></option>
						{states.map((state) => (
							<option key={state.abbreviation} value={state.abbreviation}>
								{state.name}
							</option>
						))}
					</select>

					<label htmlFor="zipCode">Zip Code</label>
					<input
						id="zipCode"
						name="zipCode"
						onChange={(e) => setZipCode(e.target.value)}
						value={zipCode}
					/>
				</div>

				<label htmlFor="departmentSelect">Department</label>
				<select
					id="departmentSelect"
					name="department"
					onChange={(e) => setDepartment(e.target.value)}
					value={department}
					required
				>
					<option value="">Select Department</option>
					{optionsDepartements.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>

				<button className="employButton" type="submit">
					Save
				</button>
			</form>

			{showModal && (
				<Modale isOpen={showModal} close={closeModal}>
					<h2>Employee Created Successfully</h2>
					
				</Modale>
			)}
		</div>
	);
};

export default FormEmployee;
