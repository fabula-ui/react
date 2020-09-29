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

const ModalExample = props => {
    const { openModal } = useContext(ModalController);

    const handleOpen = () => {
        openModal(<TargetModal />);
    }

    return (
        <Wrapper>
            <Button color="primary" onClick={handleOpen}>Open Modal</Button>
        </Wrapper>

    )
}

const TargetModal = props => {
    const { closeModal } = props;

    const handleClose = () => {
        closeModal();
    }

    return (
        <Modal>
            <ModalHeader divider="bottom">
                <Text block={true} size="lg" weight={700}>Deactivate Account</Text>
                <Text aux={true} size="sm">Modal Subtitle</Text>
            </ModalHeader>
            <ModalBody>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at laoreet tortor, id cursus neque. Etiam eros mauris, ultricies in enim et, sollicitudin pellentesque est. Sed aliquet diam leo, a gravida leo tempus vitae. Nullam tincidunt, sapien ut feugiat porttitor, odio eros fermentum neque, ut placerat mi augue ac dui. Cras ex est, pulvinar non justo in, mollis tempus ex. Donec auctor odio consequat lectus ultrices, et venenatis risus dapibus. Vivamus ut quam dui. Maecenas et dui molestie, ornare purus sit amet, ornare sapien. Nunc condimentum porta feugiat. Proin erat orci, aliquam eget mauris ac, finibus luctus augue. Integer eleifend id purus ut iaculis. Curabitur id risus rutrum, vehicula sapien at, lacinia purus. Aliquam posuere lorem vel ex tempor dignissim. Curabitur sodales nisl nec augue auctor, rhoncus fringilla sem laoreet. Ut a blandit justo, nec maximus erat.

                    Donec molestie bibendum tortor, at tristique ante maximus quis. Donec lobortis tellus finibus erat tincidunt pretium. Sed placerat, mauris ac pretium accumsan, lacus orci fermentum dui, sollicitudin rhoncus ante risus eu odio. Suspendisse commodo orci neque, sed venenatis eros consequat a. Curabitur in erat odio. Duis vel enim risus. Fusce elementum lectus eu neque venenatis, at consequat eros fermentum. Aliquam fermentum nunc id bibendum tempus. Donec congue, diam non aliquet malesuada, mi velit convallis arcu, vel egestas nunc ex in mi. Duis commodo nisl vel eleifend pulvinar. In ac convallis ante. Maecenas gravida scelerisque nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec facilisis congue nunc, sed consequat lectus congue ut. Aliquam erat volutpat. Vivamus dui magna, scelerisque at vulputate non, pharetra vel elit.

                    Cras eu sollicitudin eros. Phasellus at odio aliquam, ornare lacus sit amet, auctor urna. Maecenas sagittis nunc at nibh vehicula, at lobortis dui posuere. Nulla sit amet porta metus. Integer scelerisque sem eros, vel convallis ligula aliquet non. Suspendisse potenti. Morbi risus dolor, varius sed purus auctor, porta sollicitudin est. Aenean massa metus, dignissim nec luctus vitae, accumsan id mi. Sed dignissim, purus a sodales finibus, dolor sapien sagittis dui, non lacinia nunc tortor et ante. Aenean sodales urna et lectus pellentesque luctus. Nam scelerisque malesuada quam sit amet auctor. Aenean convallis lectus vitae dolor consequat, ut sagittis turpis tempor. Aliquam vel libero mi. Phasellus sed ligula maximus, fringilla turpis id, porttitor lorem. Praesent tempor est at libero aliquet congue.

                    Nulla arcu quam, lobortis vitae turpis vel, convallis ullamcorper sem. Proin dapibus ex sit amet nisl blandit viverra. Nunc libero purus, consequat non faucibus vitae, iaculis at urna. Mauris massa odio, fringilla non enim quis, egestas molestie dolor. Nam tincidunt iaculis rhoncus. Vestibulum pellentesque erat elit, vel iaculis nunc auctor quis. Integer nec massa eget lacus dignissim consectetur ac in tellus. Maecenas lobortis ipsum eu finibus congue. Morbi aliquam turpis eu mi consectetur, et finibus nisl ultricies. Ut dui arcu, lobortis sed elit ut, rhoncus dictum ipsum. Etiam suscipit, metus sit amet pellentesque euismod, mauris mi malesuada purus, sed iaculis lacus nisl vel sem. Phasellus scelerisque quam sed tincidunt laoreet. Vivamus quis placerat nibh, in dignissim dolor.

Donec tincidunt vitae ligula eget dignissim. Donec tincidunt tortor tortor, in tempor odio tincidunt vitae. Ut nulla metus, laoreet nec imperdiet quis, bibendum tempor lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam accumsan consequat nisi, ut faucibus arcu laoreet sit amet. Praesent feugiat varius ullamcorper. In quis suscipit risus. Morbi tempus nunc in ex efficitur porta. Etiam et lectus non mi dictum rhoncus sit amet id lacus.</Text>
            </ModalBody>
            <ModalFooter alH="end" color="light" flex={true}>
                <Wrapper>
                    <Button border={true} glow={true} onClick={handleClose} mr={1}>Cancel</Button>
                    <Button border={true} color="danger" glow={true} onClick={handleClose}>Deactivate</Button>
                </Wrapper>
            </ModalFooter>
        </Modal>
    )
}

export default ModalExample;