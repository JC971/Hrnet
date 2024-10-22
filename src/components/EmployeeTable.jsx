import { useMemo, useState } from "react";
import { useTable, useSortBy,usePagination } from "react-table";
import { useEmployeeStore } from "../store/useEmployeeStore";
import Pagination from "../Pagination";

const EmployeeTable = () => {
	const { employees } = useEmployeeStore();
	const [filter, setFilter] = useState("");
	const [pageSize, setPageSize] = useState(10);

	const filteredEmployees = useMemo(() => {
		return employees.filter((employee) =>
			Object.values(employee).some((value) =>
				String(value).toLowerCase().includes(filter.toLowerCase())
			)
		);
	}, [filter, employees]);

	const columns = useMemo(
		() => [
			{ Header: "First Name", accessor: "firstName" },
			{ Header: "Last Name", accessor: "lastName" },
			{
				Header: "Start Date",
				accessor: "startDate",
				Cell: ({ value }) =>
					value instanceof Date ? value.toLocaleDateString() : value,
			},
			{ Header: "Department", accessor: "department" },
			{
				Header: "Date of Birth",
				accessor: "dateOfBirth",
				Cell: ({ value }) =>
					value instanceof Date ? value.toLocaleDateString() : value,
			},
			{ Header: "Street", accessor: "street" },
			{ Header: "City", accessor: "city" },
			{ Header: "State", accessor: "state" },
			{ Header: "Zip Code", accessor: "zipCode" },
		],
		[]
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page,
		gotoPage,
		setPageSize: updatePageSize,
		state: { pageIndex },
	} = useTable(
		{
			columns,
			data: filteredEmployees,
			initialState: { pageIndex: 0, pageSize: 10 },
		},
		useSortBy,
		usePagination
		);
	
	const totalEntries = filteredEmployees.length;
	const currentPageFirstEntryIndex = pageIndex * pageSize + 1;
	const currentPageLastEntryIndex = Math.min((pageIndex + 1) * pageSize, totalEntries);
	
	const handlePageChange = (page) => {
		gotoPage(page - 1);
		
	};

	return (
		<div>
			<h2>Current Employees</h2>
			<div className="table-container">
				<div className="main-container">
					<div className="entries-container">
						<label> show</label>
						<select
							value={pageSize}
							onChange={(e) => {
								const newSize = Number(e.target.value);
								setPageSize(newSize);
								updatePageSize(newSize);
							}}
						>
							{[10, 20, 30, 40, 50].map((size) => (
								<option key={size} value={size}>
									{size}
								</option>
							))}
						</select>
						<span>entries</span>
					</div>
					<div className="search-container">
						<label className="search-label">Search</label>
						<input
							className="search-input"
							type="text"
							value={filter}
							onChange={(e) => setFilter(e.target.value)}
							placeholder=""
						/>
					</div>
				</div>
				<table {...getTableProps()} className="table">
					<thead>
						{headerGroups.map((headerGroup) => (
							<tr
								key={headerGroup.id}
								{...headerGroup.getHeaderGroupProps()}
								className="table-row-header"
							>
								{headerGroup.headers.map((column) => {
									const { key, ...headerProps } = column.getHeaderProps();
									return (
										<th key={key} {...headerProps}>
											{column.render("Header")}
										</th>
									);
								})}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{page.map((row) => {
							prepareRow(row);
							return (
								<tr key={row.id} {...row.getRowProps()} className="table-row">
									{row.cells.map((cell) => {
										const { key, ...cellProps } = cell.getCellProps();
										return (
											<td key={key} {...cellProps}>
												{cell.render("Cell")}
											</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
				<div className="info-container">
					<div className="entries-info">
						Showing {currentPageFirstEntryIndex} to {currentPageLastEntryIndex}{" "}
						of {totalEntries} entries
					</div>
					<Pagination
						totalPages={Math.ceil(filteredEmployees.length / pageSize)}
						currentPage={pageIndex + 1}
						onPageChange={handlePageChange}
					/>
				</div>
			</div>
		</div>
	);
};

export default EmployeeTable;
