import React, { useState, useContext } from 'react';
import {
    Button,
    ButtonGroup,
    FabulaUtils,
    Modal,
    ModalBody,
    ModalController,
    ModalFooter,
    ModalHeader,
    Text,
} from '../../lib';

const ModalSizeExample = props => {
    const { openModal } = useContext(ModalController);

    const handleOpen = size => {
        openModal(<TargetModal size={size} />);
        // setOpen(true);
    }

    return (
        <FabulaUtils>
            <ButtonGroup>
                <Button color="primary" onClick={() => handleOpen('sm')} size="sm">Small Modal</Button>
                <Button color="primary" onClick={() => handleOpen('md')} size="md">Medium Modal</Button>
                <Button color="primary" onClick={() => handleOpen('lg')} size="lg">Large Modal</Button>
                <Button color="primary" onClick={() => handleOpen('xl')} size="xl">Extra-Large Modal</Button>
            </ButtonGroup>
        </FabulaUtils>

    )
}

const TargetModal = props => {
    const { closeModal, size } = props;

    const handleClose = () => {
        closeModal();
    }

    return (
        <FabulaUtils>
            <Modal size={size}>
                <ModalHeader divider="bottom">
                    <Text block={true} size="lg" weight={700}>Modal Title</Text>
                    <Text aux={true} size="sm">Modal Subtitle</Text>
                </ModalHeader>
                <ModalBody divider="bottom">
                    <Text block={true} mb={1}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales nisi ut blandit bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                    </Text>
                </ModalBody>
                <ModalFooter alH="end" flex={true}>
                    <ButtonGroup>
                        <Button border={true} glow={true} onClick={handleClose} lighten={true}>Cancel</Button>
                        <Button border={true} color="danger" glow={true} onClick={handleClose}>Deactivate</Button>
                    </ButtonGroup>
                </ModalFooter>
            </Modal>
        </FabulaUtils>
    )
}

export default ModalSizeExample