import React from 'react';

const HelloComponent: React.FC = ({ children }) => {
	return <h1 className={'font-sans selection:bg-transparent'}>{children}</h1>;
};

export default HelloComponent;
