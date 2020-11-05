import React from 'react';
import { render } from '@testing-library/react';

// Component
import Column from './Column';

describe('Column Component', () => {
    it('Should create', () => {
        const { container } = render(<Column />);

        expect(container).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const { container } = render(<Column />);
        const columnElement = container.querySelector('.fab-column');

        expect(columnElement).toBeTruthy();
    });

    it('Should have inner content as children', () => {
        const { container } = render(<Column>Content</Column>);

        expect(container.textContent).toBe('Content');
    });
});