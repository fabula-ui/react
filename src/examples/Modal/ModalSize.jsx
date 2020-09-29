import React, { useContext } from 'react';
import {
    Button,
    Modal,
    ModalBody,
    ModalController,
    ModalFooter,
    ModalHeader,
    Text,
    Wrapper,
} from '../../lib';

const ModalSizeExample = props => {
    const { openModal } = useContext(ModalController);

    const handleOpen = size => {
        openModal(<TargetModal size={size} />);
    }

    return (
        <Wrapper>
            <Button color="primary" mr={1} onClick={() => handleOpen('xl')} size="xl">Extra-Large Modal</Button>
            <Button color="primary" mr={1} onClick={() => handleOpen('lg')} size="lg">Large Modal</Button>
            <Button color="primary" mr={1} onClick={() => handleOpen('md')} size="md">Medium Modal</Button>
            <Button color="primary" onClick={() => handleOpen('sm')} size="sm">Small Modal</Button>
        </Wrapper>
    )
}

const TargetModal = props => {
    const { closeModal, size } = props;

    const handleClose = () => {
        closeModal();
    }

    return (
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
                    <Button border={true} glow={true} onClick={handleClose} lighten={true} mr={1}>Cancel</Button>
                    <Button border={true} color="danger" glow={true} onClick={handleClose}>Deactivate</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalSizeExample