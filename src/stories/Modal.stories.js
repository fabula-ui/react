import React, { useState } from 'react';

import {
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Text,
    UtilsProvider,
    FabulaProvider,
    Button,
    ButtonGroup,
} from '../lib';

export default {
    title: 'Modal',
    component: Modal,
};

export const Examples = () => {
    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    }

    return (
        <FabulaProvider>
            <UtilsProvider>
                <Button color="primary" onClick={openModal}>Open Modal</Button>
                <Modal open={open} onClose={setOpen}>
                    <ModalHeader divider="bottom">
                        <Text block={true} size="lg" weight={700}>Deactivate account</Text>
                        <Text aux={true} size="sm">Modal Subtitle</Text>
                    </ModalHeader>
                    <ModalBody>
                        <Text block={true} mb={.25}>
                            Are you sure you want to <Text color="danger">deactivate</Text> your account?
                    </Text>
                        <Text mb="1">All of your data will be permanantly <Text color="danger" weight={600}>removed</Text>.</Text>
                    </ModalBody>
                    <ModalFooter alH="end" color="light" flex={true}>
                        <ButtonGroup>
                            <Button border={true} glow={true}>Cancel</Button>
                            <Button border={true} color="danger" glow={true}>Deactivate</Button>
                        </ButtonGroup>
                    </ModalFooter>
                </Modal>
            </UtilsProvider>
        </FabulaProvider>
    )
};