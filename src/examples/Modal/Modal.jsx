import React, { useContext } from 'react';
import {
    Modal,
    ModalBody,
    ModalController,
    ModalFooter,
    ModalHeader,
    Text,
    Button,
    ButtonGroup,
    FabulaUtils
} from '../../lib';

const ModalExample = props => {
    const { openModal } = useContext(ModalController);

    const handleOpen = () => {
        openModal(<TargetModal />);
    }

    return (
        <Button color="primary" onClick={handleOpen}>Open Modal</Button>
    )
}

const TargetModal = props => {
    const { closeModal } = props;

    const handleClose = () => {
        closeModal();
    }

    return (
        <FabulaUtils>
            <Modal>
                <ModalHeader divider="bottom">
                    <Text block={true} size="lg" weight={700}>Deactivate Account</Text>
                    <Text aux={true} size="sm">Modal Subtitle</Text>
                </ModalHeader>
                <ModalBody>
                    <Text block={true} mb={.25}>
                        Are you sure you want to <Text color="danger" inline={true}>deactivate</Text> your account?
                    </Text>
                    <Text block={true} mb="1">All of your data will be permanently <Text color="danger" inline={true} weight={600}>removed</Text>.</Text>
                </ModalBody>
                <ModalFooter alH="end" color="light" flex={true}>
                    <ButtonGroup>
                        <Button border={true} glow={true} onClick={handleClose}>Cancel</Button>
                        <Button border={true} color="danger" glow={true} onClick={handleClose}>Deactivate</Button>
                    </ButtonGroup>
                </ModalFooter>
            </Modal>
        </FabulaUtils>
    )
}

export default ModalExample;