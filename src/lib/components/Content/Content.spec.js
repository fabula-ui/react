import React from 'react';
import { render } from '@testing-library/react';

// Component
import Content from './Content';

describe('Content Component', () => {
    it('Should create', () => {
        const { container } = render(<Content />);

        expect(container).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const { container } = render(<Content />);
        const containerElement = container.querySelector('.fab-content');

        expect(containerElement).toBeTruthy();
    });

    it('Should have inner content as children', () => {
        const { container } = render(<Content>Content</Content>);

        expect(container.textContent).toBe('Content');
    });
});