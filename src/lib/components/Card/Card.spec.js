import React from 'react';
import { render } from '@testing-library/react';

// Component
import { Card } from './Card';
import { CardImage } from '../CardImage/CardImage';
import { CardSection } from '../CardSection/CardSection';

describe('Card Component', () => {
    it('Should create', () => {
        const { container } = render(<Card />);

        expect(container).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const { container } = render(<Card />);
        const cardElement = container.querySelector('.fab-card');

        expect(cardElement).toBeTruthy();
    });

    it('Should have card components as children', () => {
        const { container } = render(<Card><CardImage /><CardSection /></Card>);
        const cardImageElement = container.querySelector('.fab-card-image');
        const cardSectionElement = container.querySelector('.fab-card-section');

        expect(cardImageElement).toBeTruthy();
        expect(cardSectionElement).toBeTruthy();
    });

    it('Should pass layout prop to children', () => {
        const { container } = render(<Card layout="h"><CardImage /><CardSection /></Card>);
        const cardImageElement = container.querySelector('.fab-card-image');
        const cardSectionElement = container.querySelector('.fab-card-section');

        expect(cardImageElement.getAttribute('data-layout')).toBe('h');
        expect(cardSectionElement.getAttribute('data-layout')).toBe('h');
    });
});
