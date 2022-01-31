import { RootState } from '../index';
import { Characters } from '../../services/api/types';

const IsAnyLoading = (state: RootState) =>
	Object.values(state.Character.characterLoading).some((e) => e);

const IsCharacterLoading = (state: RootState, input: Characters | null) =>
	input && input in state.Character.characterLoading
		? state.Character.characterLoading[input]
		: false;

const SelectedCharacters = (state: RootState) => state.Character.selectedCharacters;
const IsCharacterSelected = (state: RootState, input: Characters) => {
	SelectedCharacters(state).includes(input);
};

const CharacterSelector = {
	IsAnyLoading,
	IsCharacterLoading,
	SelectedCharacters,
	IsCharacterSelected,
};
export default CharacterSelector;
