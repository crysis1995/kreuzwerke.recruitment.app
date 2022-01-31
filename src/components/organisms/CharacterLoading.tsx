import React from 'react';
import Loader from '../molecules/Loader';
import { useSelector } from 'react-redux';
import { RootState } from '../../state';
import CharacterSelector from '../../state/character/selector';
import { Characters } from '../../services/api/types';

interface Props {
	character: Characters;
}

const CharacterLoading: React.FC<Props> = ({ children, character }) => {
	const isLoading = useSelector((state: RootState) =>
		CharacterSelector.IsCharacterLoading(state, character),
	);
	if (isLoading) return <Loader />;
	return <>{children}</>;
};

export default CharacterLoading;
