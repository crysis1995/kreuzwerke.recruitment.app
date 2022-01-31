import { useEffect, useMemo, useState } from 'react';

export default function useFetchData<T>(promise: (signal?: AbortSignal) => Promise<T>) {
	const [state, setState] = useState<T | null>(null);
	const [error, setError] = useState<Error | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const abortController = new AbortController();

		async function fetchData() {
			try {
				setLoading(true);
				const data = await promise(abortController.signal);
				setState(data);
			} catch (e) {
				setError(e as Error);
			} finally {
				setLoading(false);
			}
		}

		fetchData();
		return () => {
			abortController.abort();
		};
	}, [promise]);

	return useMemo(() => ({ state, error, loading }), [state, error, loading]);
}
