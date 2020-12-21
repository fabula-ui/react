import React from 'react';
import { render } from '@testing-library/react';

// Component
import { Icon } from './Icon';

describe('Icon Component', () => {
    it('Should create', () => {
        const { container } = render(<Icon />);

        expect(container).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const { container } = render(<Icon />);
        const containerElement = container.querySelector('.fab-icon');

        expect(containerElement).toBeTruthy();
    });
});