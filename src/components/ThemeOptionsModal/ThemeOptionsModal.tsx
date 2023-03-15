import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Modal, Button, Form } from 'react-bootstrap';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import * as yup from 'yup';

import { ThemeOptions } from '../../models/themeOptions';
import { useThemeOptions } from '../../hooks/useThemeOptions';

interface ThemeOptionsModalProps {
    onSave: (SubmitHandler<ThemeOptions>);
    onHide: () => void;
    show: boolean;
}

const schema = yup.object().shape({
    name: yup.string().required(),
    streamsWidth: yup.number().min(1).required(),
    streamsOpacity: yup.number().max(100).required(),
    streamsDirection: yup.string().required(),
    streamsAlignment: yup.string().required(),
    mainStreamMargin: yup.string().required(),
    chatWidth: yup.number().min(1).required(),
}).required();

export const ThemeOptionsModal = ({ onSave, onHide, show }: ThemeOptionsModalProps) => {
    const { trigger, reset, register, watch, formState: { errors } } = useForm<ThemeOptions>({ resolver: yupResolver(schema), mode: 'all' });
    const { themeOptions, setThemeOptions } = useThemeOptions();

    const watchNameOverlapStreams = watch('name', 'overlap-streams');

    useEffect(() => {
        const subscription = watch((value, { name, type }) => onSave(watch()));
        return () => subscription.unsubscribe();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ watch ]);
    
    useEffect(() => {
        if (show) {
            reset(themeOptions);
            trigger();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ show ]);

    return (
        <Modal show={show} size="sm" onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Theme options</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Group controlId="formThemeName">
                    <Form.Label>Selected theme</Form.Label>
                    <Form.Select {...register('name')} isInvalid={(errors && typeof errors.name !== 'undefined')}>
                        <option value="">---</option>
                        <option value="overlap-streams">Overlap Streams</option>
                    </Form.Select>
                    {errors.name && <Form.Control.Feedback type="invalid">{errors.name.message}</Form.Control.Feedback>}
                </Form.Group>
                {watchNameOverlapStreams && (
                    <>
                        <Form.Group controlId="formThemeStreamsWidth">
                            <Form.Label>Streams width</Form.Label>
                            <Form.Control type="number" {...register('streamsWidth')} isInvalid={(errors && typeof errors.streamsWidth !== 'undefined')}></Form.Control>
                            {errors.streamsWidth && <Form.Control.Feedback type="invalid">{errors.streamsWidth.message}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group controlId="formThemeStreamsOpacity">
                            <Form.Label>Streams opacity</Form.Label>
                            <Form.Control type="number" {...register('streamsOpacity')} isInvalid={(errors && typeof errors.streamsOpacity !== 'undefined')}></Form.Control>
                            {errors.streamsOpacity && <Form.Control.Feedback type="invalid">{errors.streamsOpacity.message}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group controlId="formThemeStreamsDirection">
                            <Form.Label>Streams direction</Form.Label>
                            <Form.Select {...register('streamsDirection')} isInvalid={(errors && typeof errors.streamsDirection !== 'undefined')}>
                                <option value="">---</option>
                                <option value="column">column</option>
                                <option value="row">row</option>
                                <option value="column-reverse">column-reverse</option>
                                <option value="row-reverse">row-reverse</option>
                            </Form.Select>
                            {errors.streamsDirection && <Form.Control.Feedback type="invalid">{errors.streamsDirection.message}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group controlId="formThemeStreamsAlignment">
                            <Form.Label>Streams alignment</Form.Label>
                            <Form.Select {...register('streamsAlignment')} isInvalid={(errors && typeof errors.streamsAlignment !== 'undefined')}>
                                <option value="">---</option>
                                <option value="center">center</option>
                                <option value="end">end</option>
                                <option value="flex-end">flex-end</option>
                                <option value="flex-start">flex-start</option>
                                <option value="self-end">self-end</option>
                                <option value="self-start">self-start</option>
                                <option value="start">start</option>
                                <option value="baseline">baseline</option>
                                <option value="normal">normal</option>
                                <option value="stretch">stretch</option>
                            </Form.Select>
                            {errors.streamsAlignment && <Form.Control.Feedback type="invalid">{errors.streamsAlignment.message}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group controlId="formThemeMainStreamMargin">
                            <Form.Label>Main stream margin</Form.Label>
                            <Form.Select {...register('mainStreamMargin')} isInvalid={(errors && typeof errors.mainStreamMargin !== 'undefined')}>
                                <option value="none">---</option>
                                <option value="top">top</option>
                                <option value="right">right</option>
                                <option value="bottom">bottom</option>
                                <option value="left">left</option>
                            </Form.Select>
                            {errors.mainStreamMargin && <Form.Control.Feedback type="invalid">{errors.mainStreamMargin.message}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group controlId="formThemeChatWidth">
                            <Form.Label>Chat width</Form.Label>
                            <Form.Control type="number" {...register('chatWidth')} isInvalid={(errors && typeof errors.chatWidth !== 'undefined')}></Form.Control>
                            {errors.chatWidth && <Form.Control.Feedback type="invalid">{errors.chatWidth.message}</Form.Control.Feedback>}
                        </Form.Group>
                    </>
                )}
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};
