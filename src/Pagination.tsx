import React from "react";

interface PaginationProps {
	totalPages: number;
	currentPage: number;
	onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
	totalPages,
	currentPage,
	onPageChange,
}) => {
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<div className="pagination">
			<button
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				Previous
			</button>
			{pages.map((page) => (
				<button
					key={page}
					className={
						currentPage === page ? "page-number active" : "page-number"
					}
					onClick={() => onPageChange(page)}
					
				>
					{page}
				</button>
			))}
			<button
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				Next
			</button>
		</div>
	);
};

export default Pagination;
