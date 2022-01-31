import { Quote } from './types';
import axios, { AxiosInstance } from 'axios';
import { API_URL } from '../../constants';

interface GetCharacterQuotesInput {
	character: string;
	count: number;
}

type IOperations = {
	GetCharacterQuotes: IAction<GetCharacterQuotesInput, Quote[]>;
};

type IAction<I, T> = (input?: I, signal?: AbortSignal) => Promise<T>;

class Api implements IOperations {
	private axios: AxiosInstance;
	constructor() {
		this.axios = axios.create({ baseURL: API_URL });
	}

	async GetCharacterQuotes(
		input: GetCharacterQuotesInput | undefined,
		signal: AbortSignal | undefined,
	): Promise<Quote[]> {
		if (!input) return [];
		const response = await this.axios.get(`api/characters/${input.character}/${input.count}`, {
			signal,
		});
		return response.data;
	}
}

const instance = new Api();
export default instance;
