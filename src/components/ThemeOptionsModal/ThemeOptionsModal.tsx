import { Modal, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import { useModal } from '../../hooks/useModal';

export const ThemeOptionsModal = () => {
    const [ show, setShow ] = useState(false);
    const { modals, closeModal } = useModal();

    useEffect(() => {
        setShow(Boolean(modals['theme-options-modal']));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ modals ]);

    return (
        <Modal show={show} size="xl">
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => closeModal('theme-options-modal')}>Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal>
    );
};
