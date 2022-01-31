import { combineReducers } from 'redux';
import Character from './character';
import Quotes from './quotes';
import { configureStore } from '@reduxjs/toolkit';
import services from '../services';
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers({ Character: Character.Reducer, Quotes: Quotes.Reducer });

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: services,
			},
			serializableCheck: false,
		}),
});

export type RootState = ReturnType<typeof store.getState>;
export type BaseActions = typeof store.dispatch;
export type ThunkApiType = {
	state: RootState;
	extra: typeof services;
	dispatch: BaseActions;
};

export const useAppDispatch = () => useDispatch<BaseActions>();

export const Actions = { Character: Character.Actions, Quotes: Quotes.Actions };
