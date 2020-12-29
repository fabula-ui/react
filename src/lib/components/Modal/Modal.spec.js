import React, { useContext } from 'react';
import { fireEvent, render } from '@testing-library/react';

// Component
import { Button } from '../Button/Button';
import Modal from './Modal';
import ModalHeader from '../ModalHeader/ModalHeader';

// Provider
import ModalProvider from '../../providers/ModalProvider';
import ModalController from '../../controllers/ModalController';
import ModalBody from '../ModalBody/ModalBody';
import ModalFooter from '../ModalFooter/ModalFooter';

const App = () => {
    return (
        <ModalProvider>
            <ModalWrapper />
        </ModalProvider>
    );
}

const ModalWrapper = () => {
    const { openModal } = useContext(ModalController);

    const handleClick = () => {
        openModal(ModalExample);
    }

    return (
        <Button onClick={handleClick} />
    )
}

const ModalExample = () => {
    return (
        <Modal>
            <ModalHeader />
            <ModalBody />
            <ModalFooter />
        </Modal>
    )
}

describe('Modal Component', () => {
    it('Should create', () => {
        const { container } = render(<Modal />);

        expect(container).toBeTruthy();
    });

    it('Should be closed by default', () => {
        const { container } = render(<Modal />);
        const wrapperElement = container.querySelector('.fab-modal-wrapper');

        expect(wrapperElement.getAttribute('data-open')).toBe(null);
    });

    it('Should open modal', () => {
        const { container } = render(<App />);
        const buttonElement = container.querySelector('.fab-button');
        let wrapperElement;

        fireEvent.click(buttonElement, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        wrapperElement = container.querySelector('.fab-modal-wrapper');

        expect(wrapperElement.getAttribute('data-open')).toBe('true');
    });

    // TODO: fix this test
    // it('Should close modal', async done => {

    // });

    it('Should have components inside of it', () => {
        const { container } = render(<ModalExample />);
        const bodyElement = container.querySelector('.fab-modal-body');
        const footerElement = container.querySelector('.fab-modal-footer');
        const headerElement = container.querySelector('.fab-modal-header');
        const sectionElement = container.querySelector('.fab-modal-section');

        expect(bodyElement).toBeTruthy();
        expect(footerElement).toBeTruthy();
        expect(headerElement).toBeTruthy();
        expect(sectionElement).toBeTruthy();
    });

    it('Should have a backdrop', () => {
        const { container } = render(<Modal />);
        const backdropElement = container.querySelector('.fab-modal__backdrop');

        expect(backdropElement).toBeTruthy();
    });
});