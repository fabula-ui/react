import React from 'react';
import { render } from '@testing-library/react';

// Component
import Container from './Container';

describe('Container Component', () => {
    it('Should create', () => {
        const { container } = render(<Container />);

        expect(container).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const { container } = render(<Container />);
        const containerElement = container.querySelector('.fab-container');

        expect(containerElement).toBeTruthy();
    });

    it('Should have inner content as children', () => {
        const { container } = render(<Container>Content</Container>);

        expect(container.textContent).toBe('Content');
    });
});