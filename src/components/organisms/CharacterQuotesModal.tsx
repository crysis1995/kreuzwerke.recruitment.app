import React, { useCallback } from 'react';
import useModal from '../../hooks/useModal';
import { Characters } from '../../services/api/types';
import useFetchData from '../../hooks/useFetchData';
import services from '../../services';
import { QuotesCounts } from '../../constants';
import GenericModal from './GenericModal';
import Loader from '../molecules/Loader';
import QuoteComponent from '../molecules/QuoteComponent';

export const CharacterQuotesModal: React.FC<
	Pick<ReturnType<typeof useModal>, 'toggleModal'> & { character: Characters }
> = ({ toggleModal, character }) => {
	const { loading, state } = useFetchData(
		useCallback(
			(signal) =>
				services.Api.GetCharacterQuotes({ character, count: QuotesCounts.Extra }, signal),
			[character],
		),
	);
	return (
		<GenericModal
			onExit={toggleModal}
			title={<h1 className={'text-xl md:text-3xl'}>More {character} quotes!</h1>}
			body={
				<>
					<Loader when={loading}>
						<div className={' divide-y'}>
							{state?.map((e, index) => (
								<div className={'py-4'}>
									<QuoteComponent key={index} quote={e.quote} />
								</div>
							))}
						</div>
					</Loader>
				</>
			}
		/>
	);
};
