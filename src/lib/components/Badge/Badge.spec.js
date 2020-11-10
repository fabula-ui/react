import React from 'react';
import { render } from '@testing-library/react';

// Component
import Badge from './Badge';

describe('Badge Component', () => {
    it('Should create', () => {
        const { container } = render(<Badge />);

        expect(container).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const { container } = render(<Badge />);
        const badgeElement = container.querySelector('.fab-badge');

        expect(badgeElement).toBeTruthy();
    });

    it('Should have a label', () => {
        const { container } = render(<Badge label="Label" />);

        expect(container.textContent).toBe('Label');
    });

    it('Should have inner text as children', () => {
        const { container } = render(<Badge>Label</Badge>);

        expect(container.textContent).toBe('Label');
    });
});