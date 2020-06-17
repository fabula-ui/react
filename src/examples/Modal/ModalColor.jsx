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

const ModalColorExample = props => {
    const { openModal } = useContext(ModalController);

    const handleOpen = color => {
        openModal(<TargetModal color={color} />);
        // setOpen(true);
    }

    return (
        <FabulaUtils>
            <ButtonGroup>
                <Button onClick={() => handleOpen('')}>Open Modal</Button>
                <Button color="primary" onClick={() => handleOpen('primary')}>Open Modal</Button>
                <Button color="secondary" onClick={() => handleOpen('secondary')}>Open Modal</Button>
                <Button color="success" onClick={() => handleOpen('success')}>Open Modal</Button>
                <Button color="danger" onClick={() => handleOpen('danger')}>Open Modal</Button>
                <Button color="warning" onClick={() => handleOpen('warning')}>Open Modal</Button>
                <Button color="hot" onClick={() => handleOpen('hot')}>Open Modal</Button>
                <Button color="cold" onClick={() => handleOpen('cold')}>Open Modal</Button>
                <Button color="dark" onClick={() => handleOpen('dark')}>Open Modal</Button>
                <Button color="light" onClick={() => handleOpen('light')}>Open Modal</Button>
                <Button color="aux" onClick={() => handleOpen('aux')}>Open Modal</Button>
            </ButtonGroup>
        </FabulaUtils>

    )
}

const TargetModal = props => {
    const { closeModal, color } = props;

    const handleClose = () => {
        closeModal();
    }

    return (
        <FabulaUtils>
            <Modal color={color}>
                <ModalHeader divider="bottom">
                    <Text block={true} color={!!color ? 'inherit' : ''} size="lg" weight={700}>Deactivate Account</Text>
                    <Text aux={true} color={!!color ? 'inherit' : ''} size="sm">Modal Subtitle</Text>
                </ModalHeader>
                <ModalBody>
                    <Text block={true} color={!!color ? 'inherit' : ''} mb={1}>
                        Are you sure you want to deactivate your account?<br />
                        All of your data will be permanantly removed.
                    </Text>
                </ModalBody>
                <ModalFooter alH="end" color={!color ? 'light' : ''} adaptColor={!!color} flex={true}>
                    <ButtonGroup>
                        <Button border={!color}  color={color} glow={true} onClick={handleClose} lighten={true}>Cancel</Button>
                        <Button border={true} color={!color ? 'danger' : color} glow={true} invert={!!color} onClick={handleClose}>Deactivate</Button>
                    </ButtonGroup>
                </ModalFooter>
            </Modal>
        </FabulaUtils>
    )
}

export default ModalColorExample;