import React from 'react';

const List: React.FC<
	React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>
> = ({ children, ...props }) => {
	return <ul {...props}>{children}</ul>;
};

export default List;
