import React from 'react';
import { render } from '@testing-library/react';

// Component
import CardSection from './CardSection';

describe('Card Section Component', () => {
    it('Should create', () => {
        const { container } = render(<CardSection />);

        expect(container).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const { container } = render(<CardSection />);
        const cardSectionElement = container.querySelector('.fab-card-section');

        expect(cardSectionElement).toBeTruthy();
    });

    it('Should have inner content as children', () => {
        const { container } = render(<CardSection>Content</CardSection>);

        expect(container.textContent).toBe('Content');
    });
});