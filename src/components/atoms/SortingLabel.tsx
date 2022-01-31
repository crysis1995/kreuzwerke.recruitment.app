import React from 'react';

interface Props {
	onClick?: () => void;
}

const SortingLabel: React.FC<Props> = ({ children, onClick = () => {} }) => {
	return (
		<label onClick={onClick} className="font-semibold">
			{children}
		</label>
	);
};

export default SortingLabel;
