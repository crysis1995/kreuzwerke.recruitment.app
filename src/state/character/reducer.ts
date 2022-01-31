import { Characters } from '../../services/api/types';
import { createReducer } from '@reduxjs/toolkit';
import { toggleCharacter } from './actions';
import { fetchQuotesByCharacter } from '../quotes/actions';

export interface ICharacterState {
	characterLoading: { [key in Characters]?: boolean };
	selectedCharacters: Characters[];
}
const InitialState: ICharacterState = {
	characterLoading: {},
	selectedCharacters: [],
};

const CharacterReducer = createReducer(InitialState, (builder) => {
	builder.addCase(toggleCharacter, (state, action) => {
		const prevState = new Set(state.selectedCharacters);
		const characters = !Array.isArray(action.payload.character)
			? [action.payload.character]
			: action.payload.character;
		characters.forEach((value) => {
			if (prevState.has(value)) {
				prevState.delete(value);
			} else {
				prevState.add(value);
			}
		});
		state.selectedCharacters = Array.from(prevState);
	});
	builder.addCase(fetchQuotesByCharacter.pending, (state, action) => {
		state.characterLoading[action.meta.arg.character] = true;
	});
	builder.addCase(fetchQuotesByCharacter.fulfilled, (state, action) => {
		state.characterLoading[action.meta.arg.character] = false;
	});
	builder.addCase(fetchQuotesByCharacter.rejected, (state, action) => {
		state.characterLoading[action.meta.arg.character] = false;
	});
});
export default CharacterReducer;
