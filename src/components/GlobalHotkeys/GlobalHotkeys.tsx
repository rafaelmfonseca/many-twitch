import { useKey } from 'react-use';

import { THEME_OPTIONS_MODAL_HOTKEY, THEME_OPTIONS_MODAL_NAME } from '../../common/constants';
import { useModal } from '../../hooks/useModal';

export const GlobalHotkeys = () => {
    const { openModal } = useModal();

    useKey(THEME_OPTIONS_MODAL_HOTKEY, () => {
        openModal(THEME_OPTIONS_MODAL_NAME);
    });

    return (<></>);
};
