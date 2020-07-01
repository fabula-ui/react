import React from 'react';
import { render } from '@testing-library/react';

// Component
import CardSection from './CardSection';

describe('Card Section Component', () => {
    it('Should create', () => {
        const { container } = render(<CardSection />);

        expect(container).toBeTruthy();
    });
});