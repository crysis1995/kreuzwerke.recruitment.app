import React from 'react';
import HelloComponent from '../../components/molecules/HelloComponent';
import CharacterCardList from '../../components/organisms/CharacterCardList';

export default function Main() {
	return (
		<>
			<div className={'border-b border-gray-300 pb-5'}>
				<HelloComponent>
					<span className={'hover:text-pink-500 text-6xl font-semibold mr-2'}>
						Hello!
					</span>
					<br />
					<span className={'text-gray-500 mt-3 text-2xl'}>
						Let's meet my favourite
						<hr className={'md:hidden'} /> Futurama characters.
					</span>
				</HelloComponent>
			</div>
			<div className={'pt-5'}>
				<CharacterCardList />
			</div>
		</>
	);
}
