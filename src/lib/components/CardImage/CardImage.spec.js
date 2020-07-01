import React from 'react';
import { render } from '@testing-library/react';

// Component
import CardImage from './CardImage';

describe('Card Image Component', () => {
    it('Should create', () => {
        const { container } = render(<CardImage />);

        expect(container).toBeTruthy();
    });
});