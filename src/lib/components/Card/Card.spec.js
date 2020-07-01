import React from 'react';
import { render } from '@testing-library/react';

// Component
import Card from './Card';
import CardImage from '../CardImage/CardImage';
import CardSection from '../CardSection/CardSection';

describe('Card Component', () => {
    it('Should create', () => {
        const { container } = render(<Card />);

        expect(container).toBeTruthy();
    });

    it('Should pass layout prop to children', () => {
        const { container } = render(<Card layout="h"><CardImage /><CardSection /></Card>);
        const cardImageElement = container.querySelector('.fab-card-image');
        const cardSectionElement = container.querySelector('.fab-card-section');

        expect(cardImageElement.getAttribute('data-layout')).toBe('h');
        expect(cardSectionElement.getAttribute('data-layout')).toBe('h');
    });
});
