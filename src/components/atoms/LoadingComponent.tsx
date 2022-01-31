import React from 'react';

export const LoadingComponent: React.FC = () => {
	return (
		<div className={'w-full h-32 flex justify-center items-center items-center'}>
			<div className={''}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="animate-spin mr-3 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
					/>
				</svg>
			</div>
			<div>
				<span>Loading...</span>
			</div>
		</div>
	);
};
