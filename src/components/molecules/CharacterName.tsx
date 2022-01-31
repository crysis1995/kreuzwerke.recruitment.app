import React from 'react';
import { Characters } from '../../services/api/types';

interface Props {
	character: Characters;
	className?: string;
}

const CharacterName: React.FC<Props> = ({ character, className = '' }) => {
	return <h3 className={'text-3xl font-bold font-serif '.concat(className)}>{character}</h3>;
};

export default CharacterName;
