import { useCallback, useMemo, useState } from 'react';

const useModal = () => {
	const [show, setShow] = useState(false);

	const toggleModal = useCallback(() => setShow((prevState) => !prevState), [show]);

	return useMemo(
		() => ({
			showModal: show,
			toggleModal,
		}),
		[show, toggleModal],
	);
};

export default useModal;
