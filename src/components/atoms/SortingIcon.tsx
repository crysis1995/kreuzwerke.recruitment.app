import React from 'react';
import { Direction } from '../../hooks/useSorting';

interface Props {
	direction?: Direction;
}

const SortingIcon: React.FC<Props> = ({ direction = null }) => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className={'h-[15px] w-[15px] p-0 '.concat(
					direction === Direction.ASC ? 'text-gray-600' : 'text-gray-400',
				)}
				viewBox="0 0 20 20"
				fill="currentColor">
				<path
					fillRule="evenodd"
					d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
					clipRule="evenodd"
				/>
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className={'h-[15px] w-[15px] p-0 '.concat(
					direction === Direction.DESC ? 'text-gray-600' : 'text-gray-400',
				)}
				viewBox="0 0 20 20"
				fill="currentColor">
				<path
					fillRule="evenodd"
					d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
					clipRule="evenodd"
				/>
			</svg>
		</>
	);
};

export default SortingIcon;
