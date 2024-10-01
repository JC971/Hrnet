import { useState } from "react";
import Select from "react-select";
import Calendar from "../components/Calendar";
import { optionsDepartements } from "../data/departments";
import { states } from "../data/states";
import Modale from "../modale";

export const FormEmployee = () => {
	// Utilisation de useState pour gérer l'état des champs du formulaire
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		dateOfBirth: "",
		startDate: new Date(),
		department: "",
		street: "",
		city: "",
		state: "",
		zipCode: "",
	});
	const [employees, setEmployees] = useState(() => {
		const savedEmployees = localStorage.getItem("employees");
		return savedEmployees ? JSON.parse(savedEmployees) : [];
	});
	const [showModal, setShowModal] = useState(false);

	// changements dans les champs du formulaire
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	// la date
	const handleDateChange = (date) => {
		setFormData((prevState) => ({
			...prevState,
			startDate: date,
		}));
	};

	// Sauvegarder un nouvel employé dans localStorage
	const saveEmployee = () => {
		const newEmployees = [...employees, formData];
		setEmployees(newEmployees);
		localStorage.setItem("employees", JSON.stringify(newEmployees));
		setShowModal(true); //ouverture de la modale après enreg
	};

	const closeModal = () => {
		setShowModal(false);
	};

	console.log({ optionsDepartements });

	// TODO ajouter le lien vers la page de la liste

	return (
		<div className="container">
			<h1>HRnet</h1>

			<form>
				<input
					name="firstName"
					value={formData.firstName}
					onChange={handleChange}
					placeholder="First Name"
				/>
				<input
					name="lastName"
					value={formData.lastName}
					onChange={handleChange}
					placeholder="Last Name"
				/>
				<input
					name="dateOfBirth"
					type="date"
					value={formData.dateOfBirth}
					onChange={handleChange}
					placeholder="Date of Birth"
				/>

				<Calendar
					startDate={formData.startDate}
					handleDateChange={handleDateChange}
				/>

				<Select
					options={optionsDepartements}
					setValue={(value) => handleChange(value)}
				/>

				<input
					name="street"
					value={formData.street}
					onChange={handleChange}
					placeholder="Street"
				/>
				<input
					name="city"
					value={formData.city}
					onChange={handleChange}
					placeholder="City"
				/>
				<select name="state" value={formData.state} onChange={handleChange}>
					<option value="">Selected State</option>
					{states.map((state) => (
						<option key={state.abbreviation} value={state.abbreviation}>
							{state.name}
						</option>
					))}
				</select>
				<input
					name="zipCode"
					value={formData.zipCode}
					onChange={handleChange}
					placeholder="Zip Code"
					readOnly
				/>
				<button type="button" onClick={saveEmployee}>
					Save Employees
				</button>
			</form>
			<Modale isOpen={showModal} close={closeModal} />
		</div>
	);
};
