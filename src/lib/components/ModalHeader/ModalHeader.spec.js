import React from 'react';
import { render } from '@testing-library/react';

// Component
import ModalHeader from './ModalHeader';

describe('Modal Header Component', () => {
    it('Should create', () => {
        const { container } = render(<ModalHeader />);
        expect(container).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const { container } = render(<ModalHeader />);
        const componentElement = container.querySelector('[data-fab-component]');
        const element = container.querySelector('.fab-modal-header');

        expect(componentElement).toBeTruthy();
        expect(element).toBeTruthy();
    });

    it('Should have children as inner content', () => {
        const { container } = render(<ModalHeader>Content</ModalHeader>);
        const element = container.querySelector('.fab-modal-header');

        expect(element.textContent).toBe('Content');
    });

    it('Should have a close button', () => {
        const { container } = render(<ModalHeader />);
        const element = container.querySelector('.fab-close-button');

        expect(element).toBeTruthy();
    });
});