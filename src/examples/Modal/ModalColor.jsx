import React, { useContext } from 'react';
import {
    Button,
    Modal,
    ModalBody,
    ModalController,
    ModalFooter,
    ModalHeader,
    Text,
    Wrapper
} from '../../lib';

const ModalColorExample = () => {
    const { openModal } = useContext(ModalController);

    const handleOpen = color => {
        openModal(<TargetModal color={color} />);
    }

    return (
        <Wrapper>
            <Button mr={1} onClick={() => handleOpen('')}>Open Modal</Button>
            <Button mr={1} color="primary" onClick={() => handleOpen('primary')}>Open Modal</Button>
            <Button mr={1} color="lavender" onClick={() => handleOpen('lavender')}>Open Modal</Button>
            <Button mr={1} color="hot" onClick={() => handleOpen('hot')}>Open Modal</Button>
            <Button mr={1} color="aux" onClick={() => handleOpen('aux')}>Open Modal</Button>
            <Button mr={1} color="dark" onClick={() => handleOpen('dark')}>Open Modal</Button>
        </Wrapper>
    )
}

const TargetModal = props => {
    const { closeModal, color } = props;

    const handleClose = () => {
        closeModal();
    }

    return (
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
                <Wrapper>
                    <Button border={!color} color={color} glow={true} onClick={handleClose} lighten={true} mr={1}>Cancel</Button>
                    <Button border={true} color={!color ? 'danger' : color} glow={true} invert={!!color} onClick={handleClose}>Deactivate</Button>
                </Wrapper>
            </ModalFooter>
        </Modal>
    )
}

export default ModalColorExample;