import { create } from "zustand";
import { devtools } from "zustand/middleware";

type Employee = {
	firstName: string;
	lastName: string;
	startDate: null | Date;
	dateOfBirth: null | Date;
	department: string;
	street: string;
	city: string;
	zipCode: number | null;
	state: string;
};

type EmployeeStore = {
	employees: Employee[];
	newEmployee: Employee;
};

export const useEmployeeStore = create<EmployeeStore>()(
	devtools((set) => ({
		employees: [],
		newEmployee: {
			firstName: "",
			lastName: "",
			startDate: null,
			dateOfBirth: null,
			department: "",
			street: "",
			city: "",
			zipCode: null,
			state: "",
		},
		addEmployee: (employee) =>
			set((state) => ({
				employees: [...state.employees, employee],
			})),
		updateNewEmployee: (field, value) =>
			set((state) => ({
				newEmployee: { ...state.newEmployee, [field]: value },
			})),
	}))
);
