import { useMemo } from "react";
import { useTable } from "react-table"; // hook pour la construction de tableau

//tableau récapitulatif des employes
const EmployeeTable = () => {
	const data = useMemo(() => {
		const employees = JSON.parse(localStorage.getItem("employees")) || [];
		return employees;
	}, []);

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
		useTable({ columns, data }); // creation de colonnes avec usetable

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
