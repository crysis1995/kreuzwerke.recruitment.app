import { RootState } from '../index';
import { Characters } from '../../services/api/types';

const SliceCharacterQuotesSelector = (state: RootState, character: Characters, from = 0, to = 1) =>
	state.Quotes.quotesByCharacter?.[character]?.slice(from, to);

const QuotesSelector = {
	SliceCharacterQuotesSelector,
};
export default QuotesSelector;
