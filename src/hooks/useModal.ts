import { createContext, useContext, Dispatch } from 'react';

import { ContextError } from '../errors/contextError';

interface  ModalContextValue {
    modals: { [modal: string]: boolean | undefined };
    openModal: Dispatch<string>;
    closeModal: Dispatch<string>;
};

export const ModalContext = createContext<ModalContextValue | null>(null);
export function useModal(): ModalContextValue {
    const value = useContext(ModalContext);
    if (!value) {
        throw new ContextError('ModalContext');
    }
    return value;
}
