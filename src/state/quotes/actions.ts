import { createAsyncThunk } from '@reduxjs/toolkit';
import { Characters, Quote } from '../../services/api/types';
import { ThunkApiType } from '../index';
import ParseNameToApiFormat from '../../utils/ParseNameToApiFormat';

export enum EQuoteTypes {
	FetchQuotesByCharacter = 'quote/fetchByCharacter',
}

export interface FetchQuotesByCharacterInput {
	character: Characters;
	count: number;
}
export const fetchQuotesByCharacter = createAsyncThunk<
	Quote[],
	FetchQuotesByCharacterInput,
	ThunkApiType
>(EQuoteTypes.FetchQuotesByCharacter, async ({ character, count }, { signal, extra: { Api } }) => {
	return await Api.GetCharacterQuotes(
		{ character: ParseNameToApiFormat(character), count },
		signal,
	);
});
