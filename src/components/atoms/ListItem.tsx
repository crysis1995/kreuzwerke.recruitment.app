import React from 'react';

const ListItem: React.FC<
	React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
> = ({ children, ...props }) => {
	return <li {...props}>{children}</li>;
};

export default ListItem;
