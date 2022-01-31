import React from 'react';
import CharacterLoading from './CharacterLoading';
import CharacterName from '../molecules/CharacterName';
import QuoteComponent from '../molecules/QuoteComponent';
import ListItem from '../atoms/ListItem';
import { Characters } from '../../services/api/types';
import useModal from '../../hooks/useModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../state';
import QuotesSelector from '../../state/quotes/selector';
import ImageComponent from '../atoms/ImageComponent';
import { CharacterQuotesModal } from './CharacterQuotesModal';

interface Props {
	character: Characters;
}

const CharacterCard: React.FC<Props> = ({ character }) => {
	const { toggleModal, showModal } = useModal();

	const quotes = useSelector((state: RootState) =>
		QuotesSelector.SliceCharacterQuotesSelector(state, character),
	);

	const characterDataExist = quotes && quotes.length > 0;

	const handleModal = () => {
		if (characterDataExist) {
			toggleModal();
		}
	};

	return (
		<>
			<ListItem
				onClick={handleModal}
				className={
					'rounded-2xl p-10 shadow-md active:bg-orange-400 cursor-pointer selection:bg-transparent bg-white'
				}>
				<CharacterLoading character={character}>
					<div
						className={
							'w-full h-full flex flex-col items-center md:flex-row md:justify-between'
						}>
						<div
							className={
								'text-center flex-none md:w-1/3 mb-5 md:mb-0 flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125  duration-200'
							}>
							{characterDataExist && (
								<ImageComponent
									src={quotes[0].image}
									className={'h-64 md:h-36 w-fit'}
								/>
							)}
							<CharacterName character={character} />
						</div>
						<div className={'flex-auto text-center'}>
							{characterDataExist ? (
								quotes.map((value, index) => (
									<QuoteComponent key={index} quote={value.quote} />
								))
							) : (
								<div className={'text-md font-semibold text-red-400'}>
									Sorry! Character don't have any quote...
								</div>
							)}
						</div>
					</div>
				</CharacterLoading>
			</ListItem>
			{showModal && <CharacterQuotesModal character={character} toggleModal={toggleModal} />}
		</>
	);
};

export default CharacterCard;

