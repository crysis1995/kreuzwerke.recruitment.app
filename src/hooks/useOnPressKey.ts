import { useEffect } from 'react';

export function useOnPressKey(callback: (event: KeyboardEvent) => void) {
	useEffect(() => {
		window.addEventListener('keydown', callback);
		return () => {
			window.removeEventListener('keydown', callback);
		};
	}, [callback]);
}