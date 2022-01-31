import React, { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

const Portal: React.FC = ({ children }) => {
	const mount = useMemo(() => document.getElementById('portal-root'), []);
	const el = useMemo(() => document.createElement('div'), []);

	useEffect(() => {
		mount?.appendChild(el);
		return () => {
			mount?.removeChild(el);
		};
	}, [el, mount]);

	return createPortal(children, el);
};

export default Portal;
