import React, { useMemo } from 'react';
import { Characters } from '../../services/api/types';
import { Actions, useAppDispatch } from '../../state';
import { ActionMeta, OnChangeValue } from 'react-select/dist/declarations/src/types';
import Select from 'react-select';

export const CharacterSelector: React.FC<{ selectedCharacters: Characters[] }> = ({
	selectedCharacters,
}) => {
	const options = useMemo(
		() =>
			Object.values(Characters)
				.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
				.map((value) => ({
					value,
					label: value,
				})),
		[],
	);

	const dispatch = useAppDispatch();

	const handleChange: (
		newValue: OnChangeValue<{ value: Characters; label: Characters }, true>,
		actionMeta: ActionMeta<{ value: Characters; label: Characters }>,
	) => void = (_, actionMeta) => {
		switch (actionMeta.action) {
			case 'clear':
				dispatch(
					Actions.Character.toggleCharacter({
						character: actionMeta.removedValues.map((e) => e.value),
					}),
				);
				break;
			case 'select-option':
				actionMeta.option?.value &&
					dispatch(
						Actions.Character.toggleCharacter({
							character: actionMeta.option?.value,
						}),
					);
				break;
			case 'remove-value':
				actionMeta.removedValue?.value &&
					dispatch(
						Actions.Character.toggleCharacter({
							character: actionMeta.removedValue?.value,
						}),
					);
				break;
		}
	};

	return (
		<>
			<Select
				isMulti
				value={selectedCharacters.map((value) => ({
					value,
					label: value,
				}))}
				placeholder={'Select Character...'}
				onChange={handleChange}
				options={options}
			/>
		</>
	);
};
