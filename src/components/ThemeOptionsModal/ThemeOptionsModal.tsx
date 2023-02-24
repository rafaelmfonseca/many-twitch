import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Modal, Button, Form } from 'react-bootstrap';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import * as yup from 'yup';

import { ThemeOptions } from '../../models/themeOptions';
import { useThemeOptions } from '../../hooks/useThemeOptions';

interface ThemeOptionsModalProps {
    onSubmit: SubmitHandler<ThemeOptions>;
    show: boolean;
    onHide: () => void;
}

const schema = yup.object().shape({
    name: yup.string().required(),
    streamsWidth: yup.number().min(1).required(),
    opacity: yup.number().max(100).required(),
    chatWidth: yup.number().min(1).required(),
}).required();

export const ThemeOptionsModal = ({ onSubmit, onHide, show }: ThemeOptionsModalProps) => {
    const { trigger, setValue, reset, handleSubmit, control, watch, formState: { errors, isValid } } = useForm<ThemeOptions>({ resolver: yupResolver(schema), mode: 'all' });
    const { themeOptions, setThemeOptions } = useThemeOptions();
    const watchNameOverlapStreams = watch('name', 'overlap-streams');

    useEffect(() => {
        if (show) {
            reset(themeOptions);
            trigger();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ show ]);

    return (
        <Modal show={show} size="xl" onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Theme options</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
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
                            <Form.Group controlId="formThemeStreamsWidth">
                                <Form.Label>Overlapped streams width</Form.Label>
                                <Controller name="streamsWidth" control={control} render={({ field }) => (
                                    <Form.Control type="number" {...field} isInvalid={(errors && typeof errors.streamsWidth !== 'undefined')}></Form.Control>
                                )} />
                                {errors.streamsWidth && <Form.Control.Feedback type="invalid">{errors.streamsWidth.message}</Form.Control.Feedback>}
                            </Form.Group>
                            <Form.Group controlId="formThemeOpacity">
                                <Form.Label>Overlapped streams opacity</Form.Label>
                                <Controller name="opacity" control={control} render={({ field }) => (
                                    <Form.Control type="number" {...field} isInvalid={(errors && typeof errors.opacity !== 'undefined')}></Form.Control>
                                )} />
                                {errors.opacity && <Form.Control.Feedback type="invalid">{errors.opacity.message}</Form.Control.Feedback>}
                            </Form.Group>
                            <Form.Group controlId="formThemeChatWidth">
                                <Form.Label>Overlapped chat width</Form.Label>
                                <Controller name="chatWidth" control={control} render={({ field }) => (
                                    <Form.Control type="number" {...field} isInvalid={(errors && typeof errors.chatWidth !== 'undefined')}></Form.Control>
                                )} />
                                {errors.chatWidth && <Form.Control.Feedback type="invalid">{errors.chatWidth.message}</Form.Control.Feedback>}
                            </Form.Group>
                        </>
                    )}
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Close</Button>
                <Button type="submit" variant="primary" disabled={!isValid}>Save changes</Button>
            </Modal.Footer>
        </Modal>
    );
};
