import { useState } from "react";
import Modale from "./modale";

const CreateEmployee = () => {
	const [employee, setEmployee] = useState({
		firstName: "",
		lastName: "",
		startDate: "",
		department: "",
		dateOfBirth: "",
		street: "",
		city: "",
		state: "",
		zipCode: "",
	});

	const [showModale, setShowModale] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setEmployee((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const employees = JSON.parse(localStorage.getItem("employees")) || [];
		localStorage.setItem("employees", JSON.stringify([...employees, employee]));

		setShowModale(true);
	};

	const closeModale = () => {
		setShowModale(false);
		setEmployee({
			firstName: "",
			lastName: "",
			startDate: "",
			department: "",
			dateOfBirth: "",
			street: "",
			city: "",
			state: "",
			zipCode: "",
		});
		alert("Employee added successfully!");
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="firstName"
					value={employee.firstName}
					onChange={handleChange}
					placeholder="First Name"
				/>
				<input
					type="text"
					name="lastName"
					value={employee.lastName}
					onChange={handleChange}
					placeholder="Last Name"
				/>
				<input
					type="date"
					name="startDate"
					value={employee.startDate}
					onChange={handleChange}
					placeholder="Start Date"
				/>
				<input
					type="text"
					name="department"
					value={employee.department}
					onChange={handleChange}
					placeholder="Department"
				/>
				<input
					type="date"
					name="dateOfBirth"
					value={employee.dateOfBirth}
					onChange={handleChange}
					placeholder="Date of Birth"
				/>
				<input
					type="text"
					name="street"
					value={employee.street}
					onChange={handleChange}
					placeholder="Street"
				/>
				<input
					type="text"
					name="city"
					value={employee.city}
					onChange={handleChange}
					placeholder="City"
				/>
				<input
					type="text"
					name="state"
					value={employee.state}
					onChange={handleChange}
					placeholder="State"
				/>
				<input
					type="text"
					name="zipCode"
					value={employee.zipCode}
					onChange={handleChange}
					placeholder="Zip Code"
				/>
				<button type="submit">Create Employee</button>
			</form>
			<Modale isOpen={showModale} close={closeModale}>
				<h2>Employee Created Successfully!</h2>
				<p>
					<strong>Name:</strong> {employee.firstName} {employee.lastName}
				</p>
				<p>
					<strong>Department:</strong> {employee.department}
				</p>
				<p>
					<strong>Start Date:</strong> {employee.startDate}
				</p>
			</Modale>
		</>
	);
};

export default CreateEmployee;
