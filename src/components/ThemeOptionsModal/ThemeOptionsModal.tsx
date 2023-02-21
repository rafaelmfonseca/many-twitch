import { Modal, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import { useModal } from '../../hooks/useModal';

export const ThemeOptionsModal = () => {
    const [ show, setShow ] = useState(false);
    const { modals } = useModal();

    useEffect(() => {
        setShow(Boolean(modals['theme-options-modal']));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ modals ]);

    return (
        <Modal show={show}>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal>
    );
};
