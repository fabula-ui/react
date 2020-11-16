import React from 'react';
import { render } from '@testing-library/react';

// Component
import ModalBody from './ModalBody';

describe('Modal Body Component', () => {
    it('Should create', () => {
        const { container } = render(<ModalBody />);
        expect(container).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const { container } = render(<ModalBody />);
        const componentElement = container.querySelector('[data-fab-component]');
        const element = container.querySelector('.fab-modal-body');

        expect(componentElement).toBeTruthy();
        expect(element).toBeTruthy();
    });

    it('Should have children as inner content', () => {
        const { container } = render(<ModalBody>Content</ModalBody>);
        const element = container.querySelector('.fab-modal-body');

        expect(element.textContent).toBe('Content');
    });
});