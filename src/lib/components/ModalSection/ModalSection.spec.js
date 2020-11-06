import React from 'react';
import { render } from '@testing-library/react';

// Component
import ModalSection from './ModalSection';

describe('Modal Section Component', () => {
    it('Should create', () => {
        const { container } = render(<ModalSection />);
        expect(container).toBeTruthy();
    });

    it('Should have children as inner content', () => {
        const { container } = render(<ModalSection>Content</ModalSection>);
        const element = container.querySelector('.fab-modal-section');

        expect(element.textContent).toBe('Content');
    });
});