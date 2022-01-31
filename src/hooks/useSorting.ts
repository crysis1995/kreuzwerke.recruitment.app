import { useCallback, useMemo, useState } from 'react';

export enum Direction {
	NONE = 1,
	ASC = 2,
	DESC = 4,
}

export interface SortingProps {
	key: null | string;
	direction: Direction;
}

export default function UseSorting() {
	const [sorting, setSorting] = useState<SortingProps>({ key: null, direction: Direction.NONE });

	const sortBy = useCallback(
		(key: string) =>
			setSorting((prevState) => {
				switch (key) {
					case prevState.key:
						return {
							...prevState,
							direction:
								prevState.direction === 4
									? Direction.NONE
									: prevState.direction << 1,
						};
					default:
						return { key: key, direction: Direction.ASC };
				}
			}),
		[],
	);

	return useMemo(() => ({ sorting, sortBy }), [sorting, sortBy]);
}
