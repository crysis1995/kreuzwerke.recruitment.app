import { createReducer } from '@reduxjs/toolkit';
import { Characters, Quote } from '../../services/api/types';
import { fetchQuotesByCharacter } from './actions';

export interface IQuotesState {
	quotesByCharacter: { [key in Characters]?: Quote[] };
}

const INITIAL_STATE: IQuotesState = {
	quotesByCharacter: {},
};

const QuotesReducer = createReducer(INITIAL_STATE, (builder) => {
	builder.addCase(fetchQuotesByCharacter.fulfilled, (state, action) => {
		state.quotesByCharacter[action.meta.arg.character] = action.payload;
	});
});

export default QuotesReducer;
