import { Actions, useAppDispatch } from '../state';
import { useEffect } from 'react';
import { InitialCharacters } from '../constants';

export const useSelectCharactersOnStart = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(
			Actions.Character.toggleCharacter({
				character: InitialCharacters,
			}),
		);
	}, []);
};
