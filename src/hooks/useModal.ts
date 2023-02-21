import { createContext, useContext, Dispatch } from 'react';
import { ContextError } from '../errors/contextError';

type ModalContextValue = {
    modals: { [modal: string]: boolean },
    isOpened: (modal: string) => boolean,
    openModal: Dispatch<string>,
    closeModal: Dispatch<string>,
};

export const ModalContext = createContext<ModalContextValue | null>(null);
export function useModal(): ModalContextValue {
    const value = useContext(ModalContext);
    if (!value) {
        throw new ContextError('ModalContext');
    }
    return value;
}
