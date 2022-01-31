import React, { useEffect, useState } from 'react';
import useHandleCharacterChanged from '../../hooks/useSelectedCharacterChanged';
import { useSelectCharactersOnStart } from '../../hooks/useSelectCharactersOnStart';
import List from '../atoms/List';
import CharacterCard from './CharacterCard';
import SortingIcon from '../atoms/SortingIcon';
import SortingLabel from '../atoms/SortingLabel';
import UseSorting, { Direction } from '../../hooks/useSorting';
import { CharacterSelector } from './CharacterSelector';

const CharacterCardList: React.FC = () => {
	useSelectCharactersOnStart();
	const selectedCharacters = useHandleCharacterChanged();
	const [sortedData, setSortedData] = useState<any[]>([]);
	const { sorting, sortBy } = UseSorting();

	useEffect(() => {
		setSortedData(() => {
			switch (sorting.direction) {
				case Direction.NONE:
					return [...selectedCharacters];
				case Direction.ASC:
					return [...selectedCharacters].sort((a, b) =>
						a.toLowerCase().localeCompare(b.toLowerCase()),
					);
				case Direction.DESC:
					return [...selectedCharacters]
						.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
						.reverse();
			}
		});
	}, [sorting, selectedCharacters]);

	return (
		<>
			<div
				className={
					'flex flex-col-reverse lg:flex-row lg:justify-between lg:items-end py-4'
				}>
				<div
					onClick={() => sortBy('name')}
					className={'flex flex-row items-stretch md:pl-5 selection:bg-transparent'}>
					<div className={'self-center'}>
						<SortingIcon direction={sorting.direction} />
					</div>
					<div className={'self-center ml-3 text-gray-400'}>
						<SortingLabel>Sort by Character Name</SortingLabel>
					</div>
				</div>
				<div className={'mb-8 lg:mb-0 w-full lg:w-1/2'}>
					<CharacterSelector selectedCharacters={selectedCharacters} />
				</div>
			</div>

			<List className={'grid grid-cols-1 lg:grid-cols-2 gap-8'}>
				{sortedData.map((value, index) => (
					<CharacterCard character={value} key={index} />
				))}
				{sortedData.length === 0 && <p className={"text-xl col-span-2 text-center pt-10 text-gray-400"}>Please choose any character!</p>}
			</List>
		</>
	);
};

export default CharacterCardList;
