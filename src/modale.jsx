import PropTypes from "prop-types";

// Sera supprimé quand la lib "modale-jc" sera créer , et sera remplacé par un import de type import Modale from 'modale-jc';
const Modale = ({ isOpen, close, children }) => {
	if (!isOpen) return null;

	return (
		<div className="modal">
			<div className="modal-content">
				<button onClick={close}>Close</button>
				{children}
			</div>
		</div>
	);
};

Modale.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	close: PropTypes.func.isRequired,
	children: PropTypes.node,
};

export default Modale;
