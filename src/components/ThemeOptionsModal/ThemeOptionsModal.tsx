import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Modal, Button, Form } from 'react-bootstrap';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import * as yup from 'yup';

import { THEME_OPTIONS_MODAL_NAME } from '../../common/constants';
import { ThemeOptions } from '../../models/themeOptions';
import { useModal } from '../../hooks/useModal';

interface ThemeOptionsModalProps {
    onSubmit: SubmitHandler<ThemeOptions>;
}

const schema = yup.object().shape({
    name: yup.string().required(),
    width: yup.number().min(1).required(),
    opacity: yup.number().max(100).required(),
}).required();

export const ThemeOptionsModal = ({ onSubmit }: ThemeOptionsModalProps) => {
    const { trigger, handleSubmit, control, watch, formState: { errors, isValid } } = useForm<ThemeOptions>({
        resolver: yupResolver(schema),
        mode: 'all'
    });

    const { modals: { [THEME_OPTIONS_MODAL_NAME]: show }, closeModal } = useModal();

    const watchNameOverlapStreams = watch('name', 'overlap-streams');

    useEffect(() => {
        if (show) {
            trigger();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ show ]);

    const handleCloseModal = () => {
        closeModal(THEME_OPTIONS_MODAL_NAME);
    };

    return (
        <Modal show={show} size="xl" onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Theme options</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="formThemeName">
                        <Form.Label>Selected theme</Form.Label>
                        <Controller name="name" control={control} render={({ field }) => (
                            <Form.Select {...field} isInvalid={(errors && typeof errors.name !== 'undefined')}>
                                <option value="">---</option>
                                <option value="overlap-streams">Overlap Streams</option>
                            </Form.Select>
                        )} />
                        {errors.name && <Form.Control.Feedback type="invalid">{errors.name.message}</Form.Control.Feedback>}
                    </Form.Group>
                    {watchNameOverlapStreams && (
                        <>
                            <Form.Group controlId="formThemeWidth">
                                <Form.Label>Overlapped streams width</Form.Label>
                                <Controller name="width" control={control} render={({ field }) => (
                                    <Form.Control type="number" min={1} {...field} isInvalid={(errors && typeof errors.width !== 'undefined')}></Form.Control>
                                )} />
                                {errors.width && <Form.Control.Feedback type="invalid">{errors.width.message}</Form.Control.Feedback>}
                            </Form.Group>
                            <Form.Group controlId="formThemeOpacity">
                                <Form.Label>Overlapped streams opacity</Form.Label>
                                <Controller name="opacity" control={control} render={({ field }) => (
                                    <Form.Control type="number" min={1} {...field} isInvalid={(errors && typeof errors.opacity !== 'undefined')}></Form.Control>
                                )} />
                                {errors.opacity && <Form.Control.Feedback type="invalid">{errors.opacity.message}</Form.Control.Feedback>}
                            </Form.Group>
                        </>
                    )}
                </form>
                {JSON.stringify(watch())}
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                <Button type="submit" variant="primary" disabled={!isValid}>Save changes</Button>
            </Modal.Footer>
        </Modal>
    );
};
