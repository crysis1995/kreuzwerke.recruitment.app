import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Characters, Quote } from '../../services/api/types';
import { ThunkApiType } from '../index';

export enum ECharacterTypes {
	ToggleCharacter = 'character/toggle',
	FetchCharacter = 'character/fetch',
}

export interface toggleCharacterInput {
	character: Characters | Characters[];
}
export interface fetchCharacterInput {
	character: Characters;
	count: number;
}

export const toggleCharacter = createAction<toggleCharacterInput>(ECharacterTypes.ToggleCharacter);

export const fetchCharacter = createAsyncThunk<Quote[], fetchCharacterInput, ThunkApiType>(
	ECharacterTypes.FetchCharacter,
	async (input, { extra: { Api }, signal }) => {
		return await Api.GetCharacterQuotes(input, signal);
	},
);
