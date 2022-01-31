import React, { useCallback } from 'react';
import { useOnPressKey } from '../../hooks/useOnPressKey';
import Portal from '../atoms/Portal';

export interface ModalProps {
	onExit: () => void;
	title?: JSX.Element;
	body?: JSX.Element;
	footer?: JSX.Element;
}

const GenericModal: React.FC<ModalProps> = ({ onExit, title, body, footer }) => {
	const OnClickEscape = useCallback((event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			onExit();
		}
	}, []);

	useOnPressKey(OnClickEscape);
	return (
		<Portal>
			<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
				<div className="relative w-11/12 my-6 max-w-6xl lg:w-1/3">
					<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
						<div className="relative p-5 border-b border-solid border-blueGray-200 rounded-t">
							<h3 className="text-3xl font-semibold text-center">{title}</h3>
							<button
								className=" absolute top-3 right-3 self-center p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
								onClick={onExit}>
								<span className="bg-transparent text-black text-2xl block outline-none focus:outline-none">
									×
								</span>
							</button>
						</div>
						<div className="relative p-1 md:p-6 flex-auto overflow-y-auto max-h-fit">{body}</div>
						{footer && (
							<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
								{footer}
							</div>
						)}
					</div>
				</div>
			</div>
			<div className="opacity-75 fixed inset-0 z-40 bg-gray-700" />
		</Portal>
	);
};

export default GenericModal;
