import React from 'react';
import { LoadingComponent } from '../atoms/LoadingComponent';

const Loader: React.FC<{ when?: boolean }> = ({ children, when = true }) => {
	if (when || !children) return <LoadingComponent />;
	return <>{children}</>;
};

export default Loader;
