import { useSelector } from 'react-redux';
import CharacterSelector from '../state/character/selector';
import { useEffect } from 'react';
import usePrevious from './usePrevious';
import { Actions, useAppDispatch } from '../state';
import { QuotesCounts } from '../constants';

export default function useSelectedCharacterChanged() {
	const dispatch = useAppDispatch();

	const selectedCharacters = useSelector(CharacterSelector.SelectedCharacters);
	const previous = usePrevious(selectedCharacters);

	useEffect(() => {
		const toDownload = selectedCharacters.filter((value) => !previous?.includes(value));
		toDownload.forEach((value) => {
			dispatch(
				Actions.Quotes.fetchQuotesByCharacter({
					character: value,
					count: QuotesCounts.Extra,
				}),
			);
		});
	}, [selectedCharacters]);

	return selectedCharacters;
}
