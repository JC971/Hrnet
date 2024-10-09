/*import { useMemo } from "react"; // mémoriser les calculs
import { useTable } from "react-table"; // hook pour la construction de tableau
import { useEmployeeStore } from "../store/useEmployeeStore";

//tableau récapitulatif des employes
const EmployeeTable = () => {
	const { employees, loading, error } = useEmployeeStore();
	
    if (loading) return <p>Loading employees...</p>;
		if (error) return <p>Error loading employees: {error.message}</p>;
	

	const columns = useMemo(
		() => [
			{ Header: "First Name", accessor: "firstName" },
			{ Header: "Last Name", accessor: "lastName" },
			{ Header: "Start Date", accessor: "startDate" },
			{ Header: "Department", accessor: "department" },
			{ Header: "Date of Birth", accessor: "dateOfBirth" },
			{ Header: "Street", accessor: "street" },
			{ Header: "City", accessor: "city" },
			{ Header: "State", accessor: "state" },
			{ Header: "Zip Code", accessor: "zipCode" },
		],
		[]
	);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns, data: employees }); // creation de colonnes avec usetable et récupération de data
  if (loading) return <p>Loading employees...</p>;
	if (error) return <p>Error loading employees: {error.message}</p>;
	return (
		<table {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<th key={column.id} {...column.getHeaderProps()}>
								{column.render("Header")}
							</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row) => {
					prepareRow(row);
					return (
						<tr key={row.id} {...row.getRowProps()}>
							{row.cells.map((cell) => (
								<td key={cell.column.id} {...cell.getCellProps()}>
									{cell.render("Cell")}
								</td>
							))}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default EmployeeTable;
*/

import { useMemo } from "react";
import { useTable } from "react-table";
import { useEmployeeStore } from "../store/useEmployeeStore";

const EmployeeTable = () => {
	const { employees, loading, error } = useEmployeeStore();

	
	const columns = useMemo(
		() => [
			{ Header: "First Name", accessor: "firstName" },
			{ Header: "Last Name", accessor: "lastName" },
			{ Header: "Start Date", accessor: "startDate" },
			{ Header: "Department", accessor: "department" },
			{ Header: "Date of Birth", accessor: "dateOfBirth" },
			{ Header: "Street", accessor: "street" },
			{ Header: "City", accessor: "city" },
			{ Header: "State", accessor: "state" },
			{ Header: "Zip Code", accessor: "zipCode" },
		],
		[]
	);

	
	const tableInstance = useTable({ columns, data: employees });

	
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		tableInstance;

	
	if (loading) return <p>Loading employees...</p>;
	if (error) return <p>Error loading employees: {error.message}</p>;

	//rendu du tableau
	return (
		<table {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<th key={column.id} {...column.getHeaderProps()}>
								{column.render("Header")}
							</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row) => {
					prepareRow(row);
					return (
						<tr key={row.id} {...row.getRowProps()}>
							{row.cells.map((cell) => (
								<td key={cell.column.id} {...cell.getCellProps()}>
									{cell.render("Cell")}
								</td>
							))}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default EmployeeTable;
