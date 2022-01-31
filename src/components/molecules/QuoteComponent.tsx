import React from 'react';

interface Props {
	quote: string;
	className?: string;
}

const QuoteComponent: React.FC<Props> = ({ quote, className = '' }) => {
	return (
		<div className="relative box-border max-w-4xl p-4 italic text-gray-800 ">
			<div className="p-1 md:p-4">
				<p className=" px-2 md:px-4 text-sm text-center text-gray-600">
					<div className={className}>{quote}</div>
				</p>
			</div>
		</div>
	);
};

export default QuoteComponent;
