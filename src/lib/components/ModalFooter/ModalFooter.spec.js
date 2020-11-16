import React from 'react';
import { render } from '@testing-library/react';

// Component
import ModalFooter from './ModalFooter';

describe('Modal Footer Component', () => {
    it('Should create', () => {
        const { container } = render(<ModalFooter />);
        expect(container).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const { container } = render(<ModalFooter />);
        const componentElement = container.querySelector('[data-fab-component]');
        const element = container.querySelector('.fab-modal-footer');

        expect(componentElement).toBeTruthy();
        expect(element).toBeTruthy();
    });

    it('Should have children as inner content', () => {
        const { container } = render(<ModalFooter>Content</ModalFooter>);
        const element = container.querySelector('.fab-modal-footer');

        expect(element.textContent).toBe('Content');
    });
});