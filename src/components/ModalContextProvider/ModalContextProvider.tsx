import { ReactNode, useState } from 'react';

import { ModalContext } from '../../hooks/useModal';

interface ModalContextProviderProps {
    children: ReactNode;
}

export const ModalContextProvider = ({ children }: ModalContextProviderProps) => {
    const [ modals, setModals ] = useState<{ [modal: string]: boolean | undefined }>({});

    const openModal = (modal: string) => {
        if (typeof modals[modal] === 'undefined' || modals[modal] === false) {
            setModals(modals => ({ ...modals, [modal]: true }));
        }
    };
    
    const closeModal = (modal: string) => {
        if (modals[modal] === true) {
            setModals(modals => ({ ...modals, [modal]: false }));
        }
    };

    return (
        <ModalContext.Provider value={{ modals, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};
