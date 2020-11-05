import React from 'react';
import { render } from '@testing-library/react';

// Component
import CardImage from './CardImage';

describe('Card Image Component', () => {
    it('Should create', () => {
        const { container } = render(<CardImage />);

        expect(container).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const { container } = render(<CardImage />);
        const cardImageElement = container.querySelector('.fab-card-image');

        expect(cardImageElement).toBeTruthy();
    });

    it('Should have an image', () => {
        const { container } = render(<CardImage src="image" />);
        const imageElement = container.querySelector('img');

        expect(imageElement).toBeTruthy();
        expect(imageElement.getAttribute('src')).toBe('image');
    });
});