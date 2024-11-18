/*import { create } from "zustand";
import { devtools } from "zustand/middleware";

type Employee = {
	firstName: string;
	lastName: string;
	startDate: Date | null;
	dateOfBirth: Date | null;
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
*/
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type Employee = {
	firstName: string;
	lastName: string;
	startDate: Date | null;
	dateOfBirth: Date | null;
	department: string;
	street: string;
	city: string;
	zipCode: number | null;
	state: string;
};

type EmployeeStore = {
	employees: Employee[];
	newEmployee: Employee;
	addEmployee: (employee: Employee) => void;
	updateNewEmployee: (field: keyof Employee, value: any) => void;
	resetNewEmployee: () => void;
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
		resetNewEmployee: () =>
			set(() => ({
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
			})),
	}))
);
