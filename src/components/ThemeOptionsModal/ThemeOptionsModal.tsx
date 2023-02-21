import { Modal, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import { useModal } from '../../hooks/useModal';

export const THEME_OPTIONS_MODAL_NAME = 'theme-options-modal';

export const ThemeOptionsModal = () => {
    const [ show, setShow ] = useState(false);
    const { modals, closeModal } = useModal();

    useEffect(() => {
        setShow(modals[THEME_OPTIONS_MODAL_NAME] === true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ modals[THEME_OPTIONS_MODAL_NAME] ]);

    const handleCloseModal = () => {
        closeModal(THEME_OPTIONS_MODAL_NAME);
    };

    return (
        <Modal show={show} size="xl" onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal>
    );
};
