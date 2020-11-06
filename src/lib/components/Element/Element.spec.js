import React from 'react';
import { render } from '@testing-library/react';

// Component
import Element from './Element';

describe('Element Component', () => {
    it('Should create', () => {
        const { container } = render(<Element />);

        expect(container).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const { container } = render(<Element />);
        const containerElement = container.querySelector('.fab-element');

        expect(containerElement).toBeTruthy();
    });

    it('Should have inner content as children', () => {
        const { container } = render(<Element>Content</Element>);

        expect(container.textContent).toBe('Content');
    });
});