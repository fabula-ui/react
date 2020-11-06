import React from 'react';
import { render } from '@testing-library/react';

// Component
import Divider from './Divider';

describe('Divider Component', () => {
    it('Should create', () => {
        const { container } = render(<Divider />);

        expect(container).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const { container } = render(<Divider />);
        const containerElement = container.querySelector('.fab-divider');

        expect(containerElement).toBeTruthy();
    });
});